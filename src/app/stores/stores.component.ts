import { DataService } from './../service/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Store } from '../model/store';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  @Input()


  stores: Store[] = [];
  storeCategoryId: String  = '';


  constructor(private service: DataService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('storeCategoryId');
    this.storeCategoryId = id?id:'';
    this.getStores(this.storeCategoryId);


  }


  getStores(id:String) {
    this.service.getStoresByStoreCategoryId(id).subscribe(
      (res: ApiResponse<Store>) => {
        this.stores = res.data;
      }
    );
  }







}
