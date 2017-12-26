import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeadComponent,
    ShopFiltersComponent
  ],
  exports: [
    HeadComponent,
    ShopFiltersComponent
  ]
})
export class ComponentsModule { }
