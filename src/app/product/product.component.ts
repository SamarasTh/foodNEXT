import { Component, Input, OnInit } from '@angular/core';
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
  uname: any;
  private productObservable: Observable<ApiResponse<Product>>;
  products: Product[] = [];
  constructor(private service: DataService) {
    this.productObservable = this.service.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productObservable.subscribe(
      (res: ApiResponse<Product>) => {
        console.log(res);
        this.products = res.data;
        console.log(this.products);
      }
    );
  }
}
