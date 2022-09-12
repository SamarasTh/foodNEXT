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

  constructor(private service: DataService, private route: ActivatedRoute) {
    // this.productObservable = this.service.getProducts();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('storeId');
    this.storeId = id?id:'';
    this.getProducts(this.storeId);
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
}
