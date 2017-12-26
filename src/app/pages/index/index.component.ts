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

  categoire: String = '';
  estado: String = '';
  producto: String = '';
  path: string;

  constructor(private route: ActivatedRoute, private router: Router, private serviceProducts: ShopProductsService) { }

  ngOnInit() {
    this.route.url.subscribe(data => { this.path = data[0].path; });

    if (this.path === 'Index') {
      document.getElementById('li-search').style.display = 'none';
      document.getElementById('li-shop').style.display = 'block';
      document.getElementById('li-shopping-basket').style.display = 'none';
    }
    this.getAllCateogires();
    this.getAllProducts();
  }

  search() {
    this.router.navigate(['/Shop-Mosaic', this.categoire, this.estado, this.producto]);
  }

  changeCategories() {
    if (this.categoire === '' && this.estado === '') {
      this.getAllProducts();
    }
    if (this.categoire === '' && this.estado !== '') {
      this.changeEstado();
    }
    if (this.categoire !== '' && this.estado === '') {
      this.serviceProducts.getProductsForCategorie(this.categoire).subscribe((data) => { this.productsSelect = data; });
    }
    if (this.categoire !== '' && this.estado !== '') {
      this.getProductsForCategorieAndEstate(this.categoire, this.estado);
    }
  }

  changeEstado() {
    if (this.estado === '' && this.categoire === '') {
      this.getAllProducts();
    }
    if (this.estado === '' && this.categoire !== '') {
      this.changeCategories();
    }
    if (this.estado !== '' && this.categoire === '') {
      this.serviceProducts.getProductsForEstate(this.estado).subscribe((data) => { this.productsSelect = data; });
    }
    if (this.estado !== '' && this.categoire !== '') {
      this.getProductsForCategorieAndEstate(this.categoire, this.estado);
    }
  }

  private getAllCateogires() {
    this.serviceProducts.getAllCategories().subscribe((data) => { this.categoiresSelect = data; });
  }
  private getAllProducts() {
    this.serviceProducts.getAllProducts().subscribe((data) => { this.productsSelect = data; });
  }
  private getProductsForCategorieAndEstate(categorieSelected: String, estate: String) {
    this.serviceProducts.getProductsForCategorieAndState(categorieSelected, estate).subscribe((data) => { this.productsSelect = data; });
  }

}
