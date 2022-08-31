import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardHttpClientService } from '../Services/card-http-client.service';
import { CustHttpClientService } from '../Services/user-http-client.service';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  userForm!: FormGroup;
  user:any;
  userId!: any;
  card!: string;
  submitted: boolean = false;
  constructor(private custSer:CustHttpClientService,
    private cardSer:CardHttpClientService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(){
    this.userForm = this.fb.group({
      userName:['',Validators.required, Validators.min(5)],
      userPhone:['',Validators.required],
      userEmail:['',Validators.required],
      userPass:['',Validators.required],
      userConfirmPass:['',Validators.required],
      userAdd:['',Validators.required],
      userSalary:['',Validators.required],
      userCard:['',Validators.required]
    });
    
  }

  public onSubmit(){
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.user=this.userForm.value;
    if(this.user==null){
      alert("Some Fields are empty")
    }
    this.adduser();
  }

  adduser(){
    console.log(this.user)
    this.custSer.addCust(this.user).subscribe(
      (Response: number) => {
      alert("Registration Successful!!! Your User Id: "+Response),console.log(Response);
      this.userId=Response;
      this.card=this.user.userCard;
      console.log(this.userId);      
      this.addCard();
      })
    }
    
    addCard(){
      console.log(this.userId)
      console.log(this.card)
        this.cardSer.addCard(this.userId, this.card).subscribe(
         (Response: any)=> console.log("card Added")
      )
    }

  
}
