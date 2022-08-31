import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Admin/customer/customer.component';
import { EditCustomerComponent } from './Admin/edit-customer/edit-customer.component';
import { MyCardComponent } from './my-card/my-card.component';
import { MyProdComponent } from './my-prod/my-prod.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProducthandlingComponent } from './producthandling/producthandling.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'myProd', component: MyProdComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'register-customer', component: RegisterCustomerComponent },
  { path: 'editUser', component: EditCustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myCard', component: MyCardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'admindashboard', component: AdminpageComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'producthandling', component: ProducthandlingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
