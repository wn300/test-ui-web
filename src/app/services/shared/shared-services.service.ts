import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Filters } from '../../models/shop-products.models';

@Injectable()
export class SharedServicesService {
  filterExport: Subject<any> = new Subject<any>();

  constructor() { }

  getFilterObject() {
    return this.filterExport;
  }

  setFilterObject(filterObject: Filters[]) {
    return this.filterExport.next(filterObject);
  }
}
