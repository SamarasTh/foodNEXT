export class Product {

  id: Number;
  name?: String;
  description?: String;
  productCategory?: String;
  price?:Number;
  store?:String;

  constructor(id:Number){
    this.id = id;
  }
}
