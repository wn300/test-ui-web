import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    IndexComponent
  ],
  exports:[
    IndexComponent
  ]
})
export class PagesModule { }
