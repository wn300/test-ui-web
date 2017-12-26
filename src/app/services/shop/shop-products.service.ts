import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../../models/shop-products.models';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShopProductsService {

  constructor(private http: HttpClient) { }

  getShopProducts(): Observable<any> {
    return this.http.get(environment.productsEnvoriment).map((data: Observable<any>) => data);
  }
}
