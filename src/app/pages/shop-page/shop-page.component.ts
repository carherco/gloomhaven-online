import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  items = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    15,16,17,18,19,20,21,
    107,23,113
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
