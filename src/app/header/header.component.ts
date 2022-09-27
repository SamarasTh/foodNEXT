import { Store } from './../model/store';
import { DataService } from './../service/data.service';
import { ShoppingCart } from './../model/shopping-cart';
import { Component, HostListener, OnInit } from '@angular/core';
import { StoreCategory } from '../model/storeCategory';
import { ApiResponse } from '../model/apiResponse';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText = '';
  categories:StoreCategory[]= [];
  myCart: ShoppingCart = new ShoppingCart(-1);
  totalNumOfCartItems: number = 0;
  stores: Store[]=[];
  selectedStore?:Store;

  constructor(private service: DataService, private router:Router) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  getStoreByStoreName(name:any){
     this.service.getStoresByName(name).subscribe(
      (res: ApiResponse<Store[]>) => {
        this.stores =res.data;

      }
    );
  }

  @HostListener('window:storage')
  onStorageChange() {
  }


  loadCart() {
    let cart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if (cart && cart.storeId != -1) {
      this.myCart.storeId = cart.storeId;
      this.myCart.items = cart.items;
      this.totalNumOfCartItems = this.myCart.calculateTotalCartItems();
    }
  }

  navigateToStore(){
    if(this.selectedStore){
    this.router.navigateByUrl('/products/'+ this.selectedStore)
    // console.log(this.selectedStore)
  }
  }
}
