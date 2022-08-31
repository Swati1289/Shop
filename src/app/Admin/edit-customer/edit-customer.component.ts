import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustHttpClientService } from 'src/app/Services/user-http-client.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  userForm!: FormGroup;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private custSer: CustHttpClientService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userId: ['', Validators.required],
      userPhone: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.user = this.userForm.value;
    console.log(this.user.value);
    this.custSer
      .updateUserPhone(
        this.user.userId,
        this.user.userPhone
      )
      .subscribe((Response: any) => {
        console.log(Response)
        alert("Phone No Updated")
      });
  }
}
