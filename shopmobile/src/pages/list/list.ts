import { Component } from '@angular/core';
import { NavController,} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private products: Product;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Product>("https://localhost:5001/api/Order").subscribe(
      it => {
        console.log(it);
        this.products = it;
      });
  }
}
