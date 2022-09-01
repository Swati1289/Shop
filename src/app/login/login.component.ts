import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustHttpClientService } from '../Services/user-http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login: any;

  res!: boolean;
  submitted: boolean = false;
  // public userName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private custSer: CustHttpClientService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      userPass: ['', Validators.required]
    });
  }

  get loginData() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.login = this.loginForm.value;
    console.log(this.loginForm.value);
    this.custSer
      .loginvalidate(
        this.login.userId,
        this.login.userName,
        this.login.userPass
      )
      .subscribe((Response: any) => {
        this.res = Response;
      });

    if (this.res == true) {
      console.log(this.res);
      alert('Welcome to ShopEasy');
      localStorage.setItem('userName', this.login.userName);
      localStorage.setItem('userId', this.login.userId);
      sessionStorage.setItem('userId', this.login.userId);
      sessionStorage.setItem('userName', this.login.userName);
      this.router.navigate(['']);
    } else if (this.res == false) {
      alert('User not found');
    }

    (error: string) => {
      alert(' User already exsit!!' + error);
      //Error callback
      console.error('error caught in component', error);
      //throw error;   //You can also throw the error to a global error handler
    };
  }
}
