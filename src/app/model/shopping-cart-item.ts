export class ShoppingCartItem {

    id: Number;
    name?: String;
    description?: String;
    price?: number ;
    quantity?: number;

    constructor(id:Number){
      this.id = id;
    }

}
