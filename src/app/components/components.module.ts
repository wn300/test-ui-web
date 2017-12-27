import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeadComponent } from './head/head.component';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
