import { StoreCategory } from './../model/storeCategory';
import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ApiResponse } from '../model/apiResponse';
import { Store } from '../model/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.scss']
})
export class StoreCategoryComponent implements OnInit {


  @Input()
  uname:any;
    unames: any;
    private storesObservable : Observable<ApiResponse<Store>> ;
    private storeCategoryObservable : Observable<ApiResponse<StoreCategory>> ;
    stores: Store[] = [];
    storeCategories: StoreCategory[] = [];


    constructor(private service: DataService) {
      this.storesObservable = this.service.getStores();
      this.storeCategoryObservable= this.service.getStoreCategories();
    }



    ngOnInit(): void {
      // this.unames = this.service.get();
      this.getStores();
      this.getStoreCategories();
    }


    getStores() {
      this.storesObservable.subscribe(
        (res: ApiResponse<Store>) => {
          console.log(res);
          this.stores = res.data;
          console.log(this.stores);
        }
      );
    }

    getStoreCategories() {
      this.storeCategoryObservable.subscribe(
        (res: ApiResponse<StoreCategory>) => {
          this.storeCategories = res.data;
        }
      );
    }

}
