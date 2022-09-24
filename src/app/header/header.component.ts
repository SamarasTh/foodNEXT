import { DataService } from './../service/data.service';
import { ShoppingCart } from './../model/shopping-cart';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreCategory } from '../model/storeCategory';
import { ApiResponse } from '../model/apiResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'angular-text-search-highlight';
  searchText = '';
  categories = [
    'Pizza',
    'Burger',
    'Souvlakia',
    'Coffee',
    'Chinese',
    'Pasta',
    'Vegetarian',
    'Homemade',
    'Sweet',
    'Groceries',
    'Sushi',
  ]



  myCart: ShoppingCart = new ShoppingCart(-1);
  totalNumOfCartItems: number = 0;

  private storeCategoryObservable: Observable<ApiResponse<StoreCategory>>;
  storeCategories: StoreCategory[] = [];


  constructor(private service: DataService) {
    document.addEventListener('storage', () => {
      this.loadCart();
    })
    window.addEventListener('storage', () => {
      this.loadCart();
    })
    this.storeCategoryObservable = this.service.getStoreCategories();
  }



  ngOnInit(): void {
    this.loadCart();
    this.getStoreCategories();
  }



  getStoreCategories() {
    this.storeCategoryObservable.subscribe(
      (res: ApiResponse<StoreCategory>) => {
        this.storeCategories = res.data;
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
}
