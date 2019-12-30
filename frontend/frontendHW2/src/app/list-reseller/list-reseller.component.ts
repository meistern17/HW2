import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResellerService} from '../service/reseller.service';

@Component({
  selector: 'app-list-reseller',
  templateUrl: './list-reseller.component.html',
  styleUrls: ['./list-reseller.component.scss']
})
export class ListResellerComponent implements OnInit {

  resellers: any[];
  displayedColumns = ['name', 'location', 'size', 'employees', 'bio', 'id'];

  constructor(private http: HttpClient, private  resellerService: ResellerService) {
  }

  ngOnInit() {
    this.http.get('/api/reseller/list')
      .subscribe((response: any[]) => {
        this.resellers = response;
      });
  }

  deleteReseller(reseller: any) {
    this.http.delete('/api/reseller/' + reseller.id + '/delete')
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}

