import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  @Input() uname:any;
  constructor() { }

  ngOnInit(): void {
  }



}
