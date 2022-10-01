import { ShoppingCartItem } from './../model/shopping-cart-item';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { take, map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ShoppingCart } from '../model/shopping-cart';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private cartSubject = new BehaviorSubject<ShoppingCart>(new ShoppingCart(-1));
  cart$ = this.cartSubject.asObservable();

  constructor(private service: DataService) {

    let myCart = new ShoppingCart(-1);
    myCart =this.loadCart(myCart);
    this.cartSubject.next(myCart);

    // this.service.loadFromStorage('myCart')
  }


  addToCart(product: Product) {
    this.cart$.pipe(
      take(1),
      map((cart) => {
        cart.addItem(product);
        this.service.saveToStorage('myCart', cart);
      }),
    ).subscribe();
  }

  reduceQuantityOrRemoveFromCart(cartItem:ShoppingCartItem){
       this.cart$.pipe(
      take(1),
      map((cart) => {
        cart.reduceQuantityOrRemoveItem(cartItem);
        this.service.saveToStorage('myCart', cart)
        // if(cartItem.quantity ===1){
        //   this.service.saveToStorage('myCart', cart)
        // }
      }),
    ).subscribe();
  }





  loadCart(myCart) {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      myCart.storeId = cart.storeId;
      myCart.items = cart.items;

    }
    return myCart;
  }
}
