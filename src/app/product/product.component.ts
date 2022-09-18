import { ShoppingCart } from './../model/shopping-cart';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Product } from '../model/product';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()

  // private productObservable: Observable<ApiResponse<Product>>;
  products: Product[] = [];
  storeId: String  = '';
  myCart: ShoppingCart = new ShoppingCart(-1);

  constructor(private service: DataService, private route: ActivatedRoute) {
    // this.productObservable = this.service.getProducts();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('storeId');
    this.storeId = id?id:'';
    this.getProducts(this.storeId);
    this.initCart();
  }

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

  getProducts(id:String) {
    this.service.getProductsByStoreId(id).subscribe(
      (res: ApiResponse<Product>) => {
        console.log(res);
        this.products = res.data;
        console.log(this.products);
      }
    );
  }

  addToCart(product: Product){
    this.myCart.addItem(product);
    this.service.saveToStorage('myCart', this.myCart);
    console.log(this.myCart);
  }
}
