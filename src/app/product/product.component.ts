import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BillService } from '../Services/bill.service';
import { CardHttpClientService } from '../Services/card-http-client.service';
import { ProductService } from '../Services/product.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  prdList:Product[]=[]
  EMI_SELECTOR!:FormGroup;
  emi:any;
  prdRate!:number;
  installmentAmt!:number;
  prd!:Product;
  activeUser!:any;
  balanceUser!:any;


  constructor( private prdSer: ProductService,private billSer:BillService,private cardSer:CardHttpClientService, private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EMI_SELECTOR=this.fb.group({
      monthSel:['',Validators.required]
    });
    this.getPrdList();
    this.activeUser=sessionStorage.getItem("userId");
    console.log(this.activeUser);
    if(this.activeUser!=null){
      this.cardSer.getCardbyId(this.activeUser).subscribe(res=>{
        this.balanceUser=res[0].balance;
        console.log(this.balanceUser);
      })
    }
    
  }

  getPrdList(){
    this.prdSer.getPrdList().subscribe(res=>
                                     {
                                      this.prdList=res;
                                      console.log(this.prdList)
                                     })
  }
  getPrdListByName(pKey:string){
    this.prdSer.getPrdListByName(pKey).subscribe(res=>{
                                                  this.prdList=res;
                                                  })
  }
  goToEmiCalc(p:Product){
    this.prd=p;
    this.prdRate=p.prdPrice;
    this.emi=this.EMI_SELECTOR.value.monthSel;
     console.log(this.emi)
     if(this.emi=='3 Months'){
      this.emi=3;
     }
     if(this.emi=='6 Months'){
      this.emi=6;
     }
     if(this.emi=='12 Months'){
      this.emi=12;
     }
     this.installmentAmt=this.prdRate/this.emi;
     console.log(this.emi)
  }

  goToBuy(){
     console.log(this.balanceUser,this.prd.prdPrice);                                                           
     if(this.balanceUser>=this.prd.prdPrice){                                                          
     this.billSer.addUserBill(this.prd.prdId, this.emi, this.activeUser ).subscribe(res=>{this.router.navigate(['/myProd'])})

     this.cardSer.deductCredit(this.activeUser,this.prd.prdPrice) .subscribe(res=>{
                                                                                    console.log(res);
                                                                                    Swal.fire({
                                                                                      icon: 'success',
                                                                                      title: 'Billing Successfull',
                                                                                      text: 'Go to MyProducts to see your order',
                                                                                      footer: '<a href="/">My Products</a>'
                                                                                    })
                                                                                    this.router.navigate(['/myCard'])
                                                                                    })                                           
                                                }
     else{
      Swal.fire({
        icon: 'error',
        title: 'Sorry!Can not Proceed',
        text: 'You Do not have Enough Credits',
        footer: '<a href="/myCard">View Your Card</a>'
      })
     }                                                 
  }
  isLoggedIn(){
    if(this.activeUser==null)
    return false;
    else
    {
    return true;}
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }

}
