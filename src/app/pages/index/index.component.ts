import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopProductsService } from '../../services/shop/shop-products.service';
import { Categories, Products } from '../../models/shop-products.models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public categoiresSelect: Categories[] = [];
  public productsSelect: Products[] = [];

  categoire: String = '-1';
  estado: String = '-1';
  producto: String = '-1';
  path: string;

  constructor(private route: ActivatedRoute, private router: Router, private serviceProducts: ShopProductsService) { }

  ngOnInit() {
    this.route.url.subscribe(data => { this.path = data[0].path; });

    if (this.path === 'Index') {
      document.getElementById('li-search').style.display = 'none';
      document.getElementById('li-shop').style.display = 'block';
      document.getElementById('li-shopping-basket').style.display = 'none';
    }

    // tslint:disable-next-line:max-line-length
    this.serviceProducts.getShopProducts().subscribe((data) => { this.categoiresSelect = data.categories; this.productsSelect = data.products; });
  }

  search() {
    this.router.navigate(['/Shop-Mosaic', this.categoire, this.estado, this.producto]);
  }

  changeCategories() {
    // this.productsSelect.filter((product) => { product.id === this.producto });
  }
}
