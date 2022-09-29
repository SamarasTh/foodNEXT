import { CartService } from './../service/cart.service';
import { ShoppingCart } from './../model/shopping-cart';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { ApiResponse } from '../model/apiResponse';
import { Product } from '../model/product';
import { DataService } from '../service/data.service';
import { Store } from '../model/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()

  products: Product[] = [];
  storeId: String = '';
  myCart: ShoppingCart = new ShoppingCart(-1);
  store: Store = new Store();

  constructor(private service: DataService,
    private route: ActivatedRoute,
    public router: Router,
    private cartService: CartService)

    {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        let id = this.route.snapshot.paramMap.get('storeId');
        this.storeId = id ? id : '';
        this.getProducts(this.storeId);
      }
    });
  }

  items$= this.cartService.items$;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('storeId');
    this.storeId = id ? id : '';
    this.getProducts(this.storeId);
    this.initCart();
    this.getStore(this.storeId);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.service.saveToStorage('myCart', this.myCart);
  }


  // addToCart(product: Product){
  //   this.myCart.addItem(product);
  //   this.service.saveToStorage('myCart', this.myCart);
  // }

  initCart(){
    let existingCart: ShoppingCart = this.service.loadFromStorage<ShoppingCart>('myCart');
    if(existingCart.storeId != +this.storeId){
      //if store changed, then create new cart
      this.myCart = new ShoppingCart(+this.storeId)
      this.service.saveToStorage('myCart', this.myCart);
    }else{
      //if store hasn't changed, get cart of localstorage
      this.myCart.items = existingCart.items;
    }
  }



  getProducts(id: String) {
    this.service.getProductsByStoreId(id).subscribe(
      (res: ApiResponse<Product[]>) => {
        this.products = res.data;
      }
    );
  }

  getStore(id: String) {
    this.service.getStoreById(id).subscribe(
      (res: ApiResponse<Store>) => {
        this.store = res.data;
      }
    );
  }


}
