import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopProductsService } from '../../services/shop/shop-products.service';
import { Products } from '../../models/shop-products.models';

@Component({
  selector: 'app-shop-mosaic',
  templateUrl: './shop-mosaic.component.html',
  styleUrls: ['./shop-mosaic.component.css']
})
export class ShopMosaicComponent implements OnInit {
  public products: Products[] = [];

  path: string;

  constructor(private route: ActivatedRoute, private router: Router, private serviceProducts: ShopProductsService) { }

  ngOnInit() {
    let category: String = '';
    let state: String = '';
    let product: String = '';

    this.route.url.subscribe(data => { this.path = data[0].path; });

    this.route.params
      .subscribe(params => { category = params['Category']; state = params['State']; product = params['Product']; });

    if (this.path === 'Shop-Mosaic') {
      document.getElementById('li-search').style.display = 'block';
      document.getElementById('li-shop').style.display = 'none';
      document.getElementById('li-shopping-basket').style.display = 'block';
    }

    this.getProducts(category, state, product);
  }

  private getProducts(Category: String, State: String, Product: String) {
    if (Category === '' && State === '' && Product === '') {
      this.serviceProducts.getAllProducts().subscribe((data) => { this.products = data; });
    }
    if (Category !== '' && State === '' && Product === '') {
      this.serviceProducts.getProductsByCategory(Category).subscribe((data) => { this.products = data; });
    }
    if (Category === '' && State !== '' && Product === '') {
      this.serviceProducts.getProductsByState(State).subscribe((data) => { this.products = data; });
    }
    if (Category !== '' && State !== '' && Product === '') {
      this.serviceProducts.getProductsByCategoryAndState(Category, State).subscribe((data) => { this.products = data; });
    }
    if (Product !== '') {
      this.serviceProducts.getProductsByProduct(Product).subscribe((data) => { this.products = data; });
    }
  }

}
