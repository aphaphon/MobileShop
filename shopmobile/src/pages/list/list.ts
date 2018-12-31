import { Component } from '@angular/core';
import { NavController,} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AllProduct } from '../../models/allproduct';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public allProducts: AllProduct = new AllProduct();

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<AllProduct>("https://localhost:5001/api/Order").subscribe(
      it => {
        console.log(it.allProducts);
        this.allProducts = it;
      });
  }
}
