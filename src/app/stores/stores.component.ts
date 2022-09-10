import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Store } from '../model/store';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  @Input()
  uname:any;
    private storesObservable : Observable<ApiResponse<Store>> ;
    stores: Store[] = [];


    constructor(private service: DataService) {
      this.storesObservable = this.service.getStores();
    }



    ngOnInit(): void {
      this.getStores();
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





}
