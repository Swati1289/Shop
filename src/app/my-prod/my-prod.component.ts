import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BillService } from '../Services/bill.service';
import { CardHttpClientService } from '../Services/card-http-client.service';

@Component({
  selector: 'app-my-prod',
  templateUrl: './my-prod.component.html',
  styleUrls: ['./my-prod.component.css']
})
export class MyProdComponent implements OnInit {
  myProdList:any[]=[];
  paymentStatus!:String;
  myProd!:any;
  activeUser!:any;
  updateAmt!:any;


  constructor(private billSer:BillService,private router:Router,private cardSer:CardHttpClientService) { }

  ngOnInit(): void {
    this.activeUser=sessionStorage.getItem("userId");
    if(this.activeUser==null){
      Swal.fire({
        icon: 'error',
        title: 'Sorry!! , Not LoggedIn',
        text: 'First login to view this page',
        footer: '<a href="/login">Go To Login</a>'
      })
    }
    else{
      this.getMyProd();
    }
  }

  getMyProd(){
    this.billSer.getUserBill(this.activeUser).subscribe(res=>{
                                              this.myProdList=res;
                                              console.log(this.myProdList);
                                               })
  }

  displayName(mp:any){
        if(mp.emiMonth==mp.emiPaid){
          return true;
        }
        else{
          return false;
        }
  }

  displayPendingInstallment(mp:any){
       if(mp.emiPaid>=mp.emiMonth){
        return 0;
       }
       else{
        return mp.emiMonth-mp.emiPaid;
       }
  }

  payButtonActive(mp:any){
    if(mp.emiPaid==mp.emiMonth){
      return 0;
    }
    else{
      return 1;
    }
  }

  goToEmiPayment(mp:any){
       this.updateAmt=mp.prd.prdPrice/mp.emiMonth;
       this.cardSer.addCredit(this.activeUser,this.updateAmt).subscribe(res=>{
        console.log(res);
         })
       
       this.billSer.updateEmiByOne(mp.billId).subscribe(res=>{
                                                          Swal.fire({
                                                            icon: 'success',
                                                            title: 'Woohoo...',
                                                            text: 'Payment Successful!',
                                                            footer: '<a href="/myCard">View Your Card</a>&nbsp;&nbsp;&nbsp;<a href="/myProd">Go To MyProducts</a>'
                                                          })
                                                          this.updateAmt=mp.prd.prdPrice/mp.emiMonth;
                                                          console.log(this.updateAmt);
                                                          this.getMyProd();
                                                            })
  }

}
