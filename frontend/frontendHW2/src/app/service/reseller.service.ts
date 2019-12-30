import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(private http: HttpClient) { }

  getResellers() {
    return this.http.get('/api/reseller/list');
  }


  getReseller(id) {
    return this.http.get('/api/reseller/' + id + '/get');
  }

  createReseller(reseller) {
    return this.http.post('/api/reseller/create', reseller);
  }

 changeReseller(reseller) {
    return this.http.put('/api/reseller/' + reseller.id + '/update', reseller);
  }

  deleteReseller(reseller) {
    return this.http.delete('/api/reseller/' + reseller.id + '/delete');
  }


}
