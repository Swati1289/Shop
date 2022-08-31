export class mycard {
  userId: number = 0;
  cardNo: number = 0;
  cardType: string = '';
  cardLimit: number = 0;
  validityDate: string = '';
  balance: number = 0;

  constructor(
    userId: number,
    cardNo: number,
    cardType: string,
    cardLimit: number,
    validityDate: string,
    balance: number
  ) {
    this.userId = userId;
    this.cardNo = cardNo;
    this.cardType = cardType;
    this.cardLimit = cardLimit;
    this.validityDate = validityDate;
    this.balance = balance;
  }
}
