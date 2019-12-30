import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {BrandService} from '../service/brand.service';

@Injectable({
  providedIn: 'root'
})
export class BrandOptionsResolver implements Resolve<Observable<any>> {
  constructor(private brandService: BrandService) {
  }

  resolve() {
    return this.brandService.getBrandOptions();
  }
}
