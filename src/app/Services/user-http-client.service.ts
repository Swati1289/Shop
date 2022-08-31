import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../Admin/customer/customer';

@Injectable({
  providedIn: 'root',
})
export class CustHttpClientService {
  [x: string]: any;
  baseUrl: string = 'http://localhost:8085/user-api';
  login: any;
  constructor(private httpser: HttpClient) {}

  public getCustList() {
    return this.httpser.get<Customer[]>(this.baseUrl + '/getalluser');
  }

  public getUserbyName(name: string) {
    return this.httpser.get<Customer[]>(
      this.baseUrl + '/finduserbyname' + '/' + name
    );
  }

  public addCust(user: any) {
    console.log(user);
    return this.httpser.post<any>(this.baseUrl + '/adduser', user);
  }

  public deleteCustomer(id: number) {
    return this.httpser.delete(this.baseUrl + '/' + id);
  }

  public updateUserPhone(id: number, newPhoneNo: number) {
    return this.httpser.put<any>(
      this.baseUrl + '/updatebyPhone' + '/' + id + '/' + newPhoneNo,
      id
    );
  }

  public loginvalidate(userId: number, userName: string, userPass: string) {
    return this.httpser.get(
      this.baseUrl +
        '/validate' +
        '/' +
        userId +
        '/' +
        userName +
        '/' +
        userPass
    );
  }
}
