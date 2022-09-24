import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  myCart: ShoppingCart = new ShoppingCart(-1);
  totalNumOfCartItems: number = 0;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }
  loadCart() {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
      this.totalNumOfCartItems = this.myCart.calculateTotalCartItems();
    }
  }
}
