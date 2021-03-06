import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getBrandOptions() {
    return this.http.get('/api/brand/list');
  }
}
