export class Customer{
    userId: number=0;
    userName: String="";
    userPhone: number=0;
    userEmail: string="";
    userPass: string="";
    userConfirmPass: string="";
    userAdd: string="";
    userSalary: number=0;
    userCard: String=""; 
    
    constructor( userId:number, userName:String,userPhone:number, userEmail:string, userPass:string, 
        userConfirmPass:string, userAdd:string, userSalary: number, userCard: String){
            this.userId=userId;
            this.userName=userName;
            this.userPhone=userPhone;
            this.userEmail=userEmail;
            this.userPass=userPass;
            this.userConfirmPass=userConfirmPass;
            this.userAdd=userAdd;
            this.userSalary=userSalary;
            this.userCard=userCard;
        }
}