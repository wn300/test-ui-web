import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../../models/shop-products.models';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShopProductsService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.categories);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.products);
  }

  getProductsForCategorie(categorieSelected: String): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.products.filter((products: any) => products.categories.indexOf(categorieSelected) >= 0));
  }

  getProductsForEstate(estate: String): Observable<any> {
    if (estate.toString() === '1') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.available === true));
    }
    if (estate.toString() === '2') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.available === false));
    }
    if (estate.toString() === '3') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.bestSeller === true));
    }
  }

  getProductsForCategorieAndState(categorieSelected: String, estate: String) {
    if (estate.toString() === '1') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.available === true).filter((product: any) => product.categories.indexOf(categorieSelected) >= 0));
    }
    if (estate.toString() === '2') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.available === false).filter((product: any) => product.categories.indexOf(categorieSelected) >= 0));
    }
    if (estate.toString() === '3') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.bestSeller === true).filter((product: any) => product.categories.indexOf(categorieSelected) >= 0));
    }
  }
}
