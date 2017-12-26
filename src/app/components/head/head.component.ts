import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadComponent implements OnInit {
  number: Number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  enterShop() {
    this.router.navigate(['/Shop-Mosaic', '-1', '-1', '-1']);
  }

}
