import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product/Product';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-producthandling',
  templateUrl: './producthandling.component.html',
  styleUrls: ['./producthandling.component.css'],
})
export class ProducthandlingComponent implements OnInit {
  products: Product[] = [];
  product: any;
  usname: any;
  prod: any;
  prdId: any;
  id: any;
  order: any;

  constructor(private productService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getPrdList().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }
  // findproducts(ProductName:string){
  //   this.productService.serachProductByName(this.ProductName).subscribe((data:any)=>
  //   {
  //       console.log(data);
  //       this.prod=data;
  //       console.log(this.prod);
  //   },
  //   (error)=>{
  //     console.log("Error occured",error)
  //     this.router.navigate(['/**'])

  //   }
  //   )

  // }
  OnDelete(prdId: any) {
    localStorage.setItem('prdId', prdId);

    this.prdId = localStorage.getItem('prdId');
    console.log(this.prdId);
    Swal.fire({
      title: 'Are you sure want to remove the product?',
      text: 'Product will not be available for buying',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.productService
          .deleteProduct(this.prdId, this.product)
          .subscribe((data) => {
            console.log('Product values deleted form Product Id' + prdId);
            this.id = this.prdId;
            console.log('ID', this.id);
          });
        Swal.fire('Deleted!', 'Product is removed.', 'success');
        this.router.navigate(['/addproduct']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product is available for buying! :)', 'error');
      }
    });
  }

  sortData() {
    if (this.order) {
      let newarr = this.products.sort((a, b) => a.prdId - b.prdId);
      this.products = newarr;
    } else {
      let newarr = this.products.sort((a, b) => b.prdId - a.prdId);
      this.products = newarr;
    }
    this.order = !this.order;
  }

  Search() {
    if (this.prdId == '') {
      this.ngOnInit();
    } else {
      this.products = this.products.filter((res) => {
        return res.prdId.toLocaleString().match(this.prdId.toLocaleString());
      });
    }
  }
}
