import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AdminService } from '../Services/admin.service';
import { Adminlogin } from './adminlogin';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  var:Adminlogin;
  n:any;
  adminId: any;
  adminName:any ;
  adminPassword:any;
  message:string | undefined
 
 
  constructor( private adminService:AdminService, private router:Router ) {
    this.var=new Adminlogin;
   }
 
  ngOnInit(): void {
  }
    checkAdmin(){
      this.adminService.getByAdminId( this.adminId,this.adminName,this.adminPassword).subscribe(
        (data)=>{
          this.n=data;
          console.log(data);
          console.log(this.n);
          if (this.n==2) {
            this.message="UserId is invalid/does not exist"
          } if(this.n==3) {
            this.message="Wrong Password"
          }if(this.n==1){
            this.message="Succefully logged-In";
            Swal.fire("Welcome",'Admin Login sucessfull','success');
            this.router.navigate(['/admindashboard']);
          }
        }
      )
 
    }
}