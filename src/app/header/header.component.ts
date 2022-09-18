import { DataService } from './../service/data.service';
import { ShoppingCart } from './../model/shopping-cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myCart: ShoppingCart = new ShoppingCart(-1);
  totalNumOfCartItems: number = 0;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if(cart && cart.storeId != -1){
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
      this.totalNumOfCartItems = this.myCart.calculateTotalCartItems();
    }
  }

}
