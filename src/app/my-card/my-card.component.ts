import { Component, OnInit } from '@angular/core';
import { CardHttpClientService } from '../Services/card-http-client.service';
import { mycard } from './mycard';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  userId!: number;
  cardDetails: mycard[]=[];
  default: string | null="Login required"
  constructor(private cardSer:CardHttpClientService) { }

  ngOnInit(): void {
    this.getMyCard();
  }

  getMyCard(){
    this.userId=Number(localStorage.getItem('userId'));
    console.log(typeof(this.userId));
    if(this.userId !== 0){
      this.cardSer.getCardbyId(this.userId).subscribe((Response: any) => {
        this.cardDetails = Response;
        console.log(this.cardDetails);
      });      
      return this.cardDetails;
    }
    else{
      return this.default
    }   
  }

}
