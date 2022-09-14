import { Product } from './product';

export class ShoppingCartItem {

    id?: Number;
    title?: String;
    imageUrl?: String;
    price?: Number = 0;
    quantity?: Number=0;

    constructor(){
    }

}
