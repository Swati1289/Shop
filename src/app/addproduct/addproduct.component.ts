import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../product/Product';
import { AdminService } from '../Services/admin.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  product!:Product;
  
  id:any;
  prdId: any;

  constructor(private productService:AdminService, private route:ActivatedRoute, private router:Router) { 
    this.product = new Product();
  }


  ngOnInit(): void {console.log(this.product);
    }
    
    
saveData(){  
  this.productService.addProduct(JSON.parse(JSON.stringify(this.product))).subscribe(
    (data)=>{
      console.log("New Product added");
      alert("Product added with Product ID"+this.product.prdId)
    }
  )
  Swal.fire("Product Added Successfully",'Product is ready to be displayed for Users','success');
  this.router.navigate(['/producthandling'])
}
}
