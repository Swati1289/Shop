import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ng add @ng-bootstrap/ng-bootstrap

import { ProducthandlingComponent } from './producthandling/producthandling.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductComponent } from './product/product.component';
import { MyProdComponent } from './my-prod/my-prod.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { EditCustomerComponent } from './Admin/edit-customer/edit-customer.component';
import { MyCardComponent } from './my-card/my-card.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductComponent,
    MyProdComponent,
    RegisterCustomerComponent,
    LoginComponent,
    CustomerComponent,
    EditCustomerComponent,
    MyCardComponent,
    AdminloginComponent,
    AdminpageComponent,
    AddproductComponent,
    ProducthandlingComponent,
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgbModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
