export class Account{

  id: Number;
  username?:String;
  password?:String;
  email?:String;
  phone?:String;
  addressList!: any[];
  fname?:String;
  lname?:String;
  age!:Number;

 constructor(id:Number){
    this.id = id;
  }
}
