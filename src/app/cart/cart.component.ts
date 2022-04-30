import { Component, OnInit } from '@angular/core';
import { Toy } from '../entities/Toy';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart_toys: Toy[]=[];
  dataChange: any;

  constructor() { }

  ngOnInit(){
    this.dataChange = localStorage.getItem("toys")!;
    this.cart_toys = JSON.parse(this.dataChange);
    // this.cart_toys = this.dataChange.date.getDate();
  }

}
