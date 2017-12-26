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

  getCategoriesById(id: String): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.categories.filter((category) => category.id.toString() === id));
  }

  getAllProducts(): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.products);
  }

  getProductsByProduct(productSelected: String): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.products.filter((product) => product.id.toString() === productSelected));
  }

  getProductsByCategory(categorySelected: String): Observable<any> {
    return this.http.get(environment.productsEnvoriment)
      .map((data: any) => data.products.filter((products: any) => products.categories.toString().indexOf(categorySelected) >= 0));
  }

  getProductsByState(state: String): Observable<any> {
    if (state.toString() === '1') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.available === true));
    }
    if (state.toString() === '2') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.available === false));
    }
    if (state.toString() === '3') {
      return this.http.get(environment.productsEnvoriment)
        .map((data: any) => data.products.filter((product) => product.bestSeller === true));
    }
  }

  getProductsByCategoryAndState(categorySelected: String, state: String) {
    if (state.toString() === '1') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.available === true).filter((product: any) => product.categories.toString().indexOf(categorySelected) >= 0));
    }
    if (state.toString() === '2') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.available === false).filter((product: any) => product.categories.toString().indexOf(categorySelected) >= 0));
    }
    if (state.toString() === '3') {
      return this.http.get(environment.productsEnvoriment)
        // tslint:disable-next-line:max-line-length
        .map((data: any) => data.products.filter((product) => product.bestSeller === true).filter((product: any) => product.categories.toString().indexOf(categorySelected) >= 0));
    }
  }
}
