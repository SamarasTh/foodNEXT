import { CartService } from './../service/cart.service';
import { ShoppingCartItem } from './../model/shopping-cart-item';
import { DataService } from './../service/data.service';
import { Component,  OnInit } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  myCart: ShoppingCart = new ShoppingCart(-1);
  cartEmpty = false;

  constructor(private service: DataService, private cartService:CartService) {
  }

  ngOnInit(){
    this.loadCart();

    this.showQuickCheckout();
  }

  showQuickCheckout(){
    if (this.myCart.calculateTotalCartItems() > 0){
        this.cartEmpty=true;
    }
  }

  loadCart() {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
    }
  }

  clearCart() {
    this.service.removeFromStorage('myCart');
  }

  reduceQuantityOrRemoveCartItem(item: ShoppingCartItem){
      // this.myCart.reduceQuantityOrRemoveItem(item);
      // if(item.quantity === 1){
      this.cartService.reduceQuantityOrRemoveFromCart(item);
      this.myCart = this.cartService.getCart();
    // }
 }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.myCart = this.cartService.getCart();
  }





}

