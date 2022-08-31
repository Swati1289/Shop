import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:8085/prd-api';
  constructor(private httpSer: HttpClient) {}

  public getPrdList() {
    return this.httpSer.get<any[]>(this.baseUrl + '/prdlist');
  }

  public getPrdListByName(pKey: string) {
    return this.httpSer.get<any[]>(this.baseUrl + '/prdlistbyname/' + pKey);
  }
}
