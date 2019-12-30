import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SweetService {

  constructor(private http: HttpClient) { }

  getSweets() {
    return this.http.get('/api/sweet/list');
  }


  getSweet(id) {
    return this.http.get('/api/sweet/' + id + '/get');
  }

  createSweet(sweet) {
    return this.http.post('/api/sweet/create', sweet);
  }

  changeSweet(sweet) {
    return this.http.put('/api/sweet/' + sweet.id + '/update', sweet);
  }

  deleteSweet(sweet) {
    return this.http.delete('/api/sweet/' + sweet.id + '/delete');
  }


}
