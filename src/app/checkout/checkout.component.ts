import { Address } from './../model/address';
import { Product } from './../model/product';
import { Account } from './../model/account';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../model/apiResponse';
import { ShoppingCart } from '../model/shopping-cart';
import { DataService } from '../service/data.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  account: Account = new Account(1);
  accountId: String = '';

  constructor(private service: DataService, public router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        let id = this.route.snapshot.paramMap.get('accountId');
        this.accountId = id ? id : '';
      }
    });


  }

  ngOnInit(): void {
    this.getAccountById(this.accountId);
  }


  getAccountById(id: String) {
    this.service.getAccountById(id).subscribe(
      (res: ApiResponse<Account>) => {
        this.account = res.data;
      }
    );
  }






}

