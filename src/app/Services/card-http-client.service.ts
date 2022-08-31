import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardHttpClientService {
  baseUrl: string = 'http://localhost:8085/card-api';

  constructor(private cardSer: HttpClient) {}

  public addCard(id: number, cardType: string) {
    // console.log("Inside service layer"+ card)
    return this.cardSer.post<any>(
      this.baseUrl + '/addcard' + '/' + id + '/' + cardType,
      id
    );
  }

  public getCardbyId(id: number) {
    return this.cardSer.get<any>(this.baseUrl + '/getcardbyid' + '/' + id);
  }

  public deductCredit(uId: number, amt: number) {
    return this.cardSer.put<any>(
      this.baseUrl + '/deductbalbyid/' + uId + '/' + amt,
      amt
    );
  }

  public addCredit(uId: number, amt: number) {
    return this.cardSer.put<any>(
      this.baseUrl + '/addbalbyid/' + uId + '/' + amt,
      amt
    );
  }
}
