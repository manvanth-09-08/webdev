import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  public toys;
  public ordered: any;
  public cartService: CartService;

  constructor(private router: Router) {
    this.cartService = new CartService();
    this.toys = [
      {
        name: 'car',
        price: 100,
        id: 0,
        url: 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1',
      },
      {
        name: 'bike',
        price: 200,
        id: 1,
        url: 'https://m.media-amazon.com/images/I/81XyIoZ8+HL._SL1500_.jpg',
      },
      {
        name: 'cycle',
        price: 300,
        id: 2,
        url: 'https://rukminim1.flixcart.com/image/416/416/kkyc9zk0/cycle/8/f/t/defender-27-5-17-hercules-single-speed-original-imagy6tzdfereguj.jpeg?q=70',
      },
      {
        name: 'train',
        price: 400,
        id: 3,
        url: 'https://hubballidharwadinfra.com/wp-content/uploads/2021/03/superfast-train-hubli-bangalore.jpg',
      },
      {
        name: 'bus',
        price: 500,
        id: 4,
        url: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain',
      },
    ];

    this.ordered = [];
  }

  public buyToy(toy: any) {
    this.ordered.push(this.toys[toy]);
    console.log(this.toys[toy]);
  }

  // public removeToy(toy: any) {
  //   this.ordered.splice(toy,1);
  //   console.log(this.ordered);
  // }
  public goToCart() {
    CartService.orders = this.ordered;
    this.router.navigate(['/cart']);
  }

  public getToy() {
    return this.ordered;
  }
  ngOnInit(): void {}
}
