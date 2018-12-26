import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  private products: Product;
  private ProductOrderPrice: string;
  private ProductOrderAmount: number;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Product>("https://localhost:5001/api/Order").subscribe(
      it => {
        console.log(it);
        this.products = it;
      });
  }

  OrderProduct() {
    this.http.post<Product>("https://localhost:5001/api/Order",
      {
        Amount: this.ProductOrderAmount,
        Price: this.ProductOrderPrice
      }).subscribe(
        it => {
          this.products = it;
        });
  }

}
