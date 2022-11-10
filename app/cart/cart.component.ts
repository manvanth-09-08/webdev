import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartService;
  orders: any;
  total = 0;

  constructor() {
    this.cartService = new CartService();
    this.orders = [];
    this.getCart();
  }

  public getCart() {
    this.orders = CartService.orders;
    for (let i = 0; i < this.orders.length; i++) {
      this.total += this.orders[i].price;
    }

    console.log(this.orders);
  }

  ngOnInit(): void {}
}
