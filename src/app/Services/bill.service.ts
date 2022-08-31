import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  baseURL: string = 'http://localhost:8085/bill-api';
  constructor(private httpSer: HttpClient) {}

  public addUserBill(pNo: number, emi: number, uId: number) {
    return this.httpSer.post<any[]>(
      this.baseURL + '/addUserBill/' + uId + '/' + pNo + '/' + emi,
      101
    );
  }
  public getUserBill(uId: number) {
    return this.httpSer.get<any[]>(this.baseURL + '/getUserBill/' + uId);
  }
  public updateEmiByOne(bId: number) {
    return this.httpSer.put<any>(this.baseURL + '/updateEmiByOne/' + bId, bId);
  }
}
