import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SweetService} from '../service/sweet.service';
import {ResellerService} from "../service/reseller.service";
import {BrandService} from "../service/brand.service";

@Component({
  selector: 'app-list-sweet',
  templateUrl: './list-sweet.component.html',
  styleUrls: ['./list-sweet.component.scss']
})
export class ListSweetComponent implements OnInit {

  sweets: any[];
  displayedColumns = ['name', 'brand', 'expiration_date', 'calories', 'veggie', 'id'];

  constructor(private http: HttpClient, private  sweetService: SweetService, private brandService: BrandService) {
  }

  ngOnInit() {
    this.http.get('/api/sweet/list')
      .subscribe((response: any[]) => {
        this.sweets = response;
      });
  }

  deleteSweet(sweet: any) {
    this.http.delete('/api/sweet/' + sweet.id + '/delete')
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}

