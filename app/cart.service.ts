import { Injectable } from '@angular/core';
import { ShoppingComponent } from './shopping/shopping.component';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public static orders: any[];
  constructor() {}

  // public setData(str: any) {
  // }

  // public order() {
  // }
}
