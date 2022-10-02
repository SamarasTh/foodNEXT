import { CartService } from './../service/cart.service';
import { Address } from './../model/address';
import { Product } from './../model/product';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../model/apiResponse';
import { ShoppingCart } from '../model/shopping-cart';
import { DataService } from '../service/data.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  myCart: ShoppingCart = new ShoppingCart(-1);

  account: Account = new Account(1);
  accountId: String = '1';

  constructor(private service: DataService, private cartService: CartService,
     public router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getAccountById(this.accountId);
    this.loadCart();
  }

  loadCart() {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
    }
  }


  getAccountById(id: String) {
    this.service.getAccountById(id).subscribe(
      (res: ApiResponse<Account>) => {
        this.account = res.data;
      }
    );
  }

  placeOrder(){
    let myCart = this.cartService.getCart();
    let order = {
      accId: 1,
      addrId: 1,
      orderItems: myCart.items,
      paymentMethod: 'CASH'
    }

    this.service.postOrder(order).subscribe(
      (res) => {
        console.log(res);

      }
    );

  }






}

