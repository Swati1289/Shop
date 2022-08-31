import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../adminpage/user-details';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  baseUrlAdminLogin: string = 'http://localhost:8085/adminRest/api/validate/';
  getByAdminId(adminId: number, adminName: string, adminPassword: string) {
    return this.httpClient.get(
      this.baseUrlAdminLogin + adminId + '/' + adminName + '/' + adminPassword
    );
  }

  baseUrlAdminPage: string = 'http://localhost:8085/adminRest/api';
  getAllUserdetails() {
    return this.httpClient.get(this.baseUrlAdminPage + '/userDetails');
  }

  deleteUser(userId: any, users: UserDetails) {
    return this.httpClient.delete(
      'http://localhost:8085/adminRest/api/userDetails/delete/' + userId
    );
  }

  deleteProduct(prdId: any, product: Product) {
    return this.httpClient.delete(
      'http://localhost:8085/adminRest/api/deleteProduct/' + prdId
    );
  }

  addProduct(product: Product) {
    return this.httpClient.post(
      'http://localhost:8085/adminRest/api/addproduct',
      product
    );
  }

  getPrdList() {
    return this.httpClient.get('http://localhost:8085/prd-api/prdlist');
  }

  updateCardStatus(userId: any, users: UserDetails) {
    return this.httpClient.put(
      'http://localhost:8085/adminRest/api/updateCardStatus/' + userId,
      userId
    );
  }
}
