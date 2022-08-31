import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustHttpClientService } from 'src/app/Services/user-http-client.service';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  [x: string]: any;
  custList: Customer[] = [];
  searchValue: any;
  user: any;
  searchvisibility: boolean = false;
  constructor(
    private custSer: CustHttpClientService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getuserList();
  }

  findUser(searchValue: string) {
    this.custSer.getUserbyName(this.searchValue).subscribe(
      (Response: any) => {
        console.log(Response);
        this.user = Response;
        console.log(this.user);
        this.searchvisibility = true;
      },
      (error) => {
        console.log('Error occured', error);
        this.router.navigate(['/**']);
      }
    );
  }

  getuserList() {
    this.custSer.getCustList().subscribe((response) => {
      this.custList = response;
      console.log(this.custList);
    });
  }

  editUser(customer: Customer): void {
    // localStorage.removeItem('editCustomerId');
    // localStorage.setItem('editCustomerId', customer.userId.toString());
    // this.router.navigate(['editCustomer']);
  }

  //Delete Customer
  deleteUser(customer: Customer): void {
    // this.custSer.deleteCustomer(customer.userId).subscribe((Response: any) => {
    //   this.custList = this.custList.filter((c) => c == customer);
    //   this.getuserList();
  }
}
