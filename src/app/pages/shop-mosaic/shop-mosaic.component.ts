import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopProductsService } from '../../services/shop/shop-products.service';

@Component({
  selector: 'app-shop-mosaic',
  templateUrl: './shop-mosaic.component.html',
  styleUrls: ['./shop-mosaic.component.css']
})
export class ShopMosaicComponent implements OnInit {
  path: string;

  constructor(private route: ActivatedRoute, private router: Router, private serviceProducts: ShopProductsService) { }

  ngOnInit() {
    this.route.url.subscribe(data => { this.path = data[0].path; });

    if (this.path === 'Shop-Mosaic') {
      document.getElementById('li-search').style.display = 'block';
      document.getElementById('li-shop').style.display = 'none';
      document.getElementById('li-shopping-basket').style.display = 'block';
    }

    this.serviceProducts.getShopProducts().subscribe((data) => { console.log(data); });
  }

}
