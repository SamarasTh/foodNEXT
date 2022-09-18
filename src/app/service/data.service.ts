import { StoreCategory } from './../model/storeCategory';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Store } from '../model/store';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl: String = 'http://localhost:8080';

  getProducts(): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(this.baseUrl + '/products');
  }

  getProductsByStoreId(storeId:String ): Observable<ApiResponse<Product>>{

    return this.http.get<ApiResponse<Product>>(this.baseUrl + '/stores/products-by-store?storeId='+ storeId)
  }

  getStoresByStoreCategoryId(storeCategoryId:String ): Observable<ApiResponse<Store>>{

    return this.http.get<ApiResponse<Store>>(this.baseUrl + '/stores/store-by-category?storeCategoryId='+ storeCategoryId)
  }

  getStores(): Observable<ApiResponse<Store>> {
    return this.http.get<ApiResponse<Store>>(this.baseUrl + '/stores');
  }

  getStoreCategories(): Observable<ApiResponse<StoreCategory>> {
    return this.http.get<ApiResponse<StoreCategory>>(this.baseUrl + '/categories');
  }

  loadFromStorage<T>(key: string): T {
    const storedValue = localStorage.getItem(key) as string;
    return JSON.parse(storedValue);
  }

  saveToStorage(key: string, value: any){
    localStorage.setItem(key,  JSON.stringify(value));
  }
}
