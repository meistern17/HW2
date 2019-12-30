import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SweetService} from '../service/sweet.service';

@Injectable({
  providedIn: 'root'
})
export class SweetOptionsResolver implements Resolve<Observable<any>> {
  constructor(private sweetService: SweetService) {
  }

  resolve() {
    return this.sweetService.getSweets();
  }
}
