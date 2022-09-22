import { ShoppingCartItem } from './../model/shopping-cart-item';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  myCart: ShoppingCart = new ShoppingCart(-1);
  totalNumOfCartItems: number = 0;

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
      this.totalNumOfCartItems = this.myCart.calculateTotalCartItems();
    }
  }

  clearCart() {
    this.service.removeFromStorage();
  }

}

