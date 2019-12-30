import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-sweet',
  templateUrl: './edit-sweet.component.html',
  styleUrls: ['./edit-sweet.component.scss']
})
export class EditSweetComponent implements OnInit {
  sweetFormGroup;
  brandOptions;
  currentRate = 0;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.brandOptions = data.brandOptions;
    this.sweetFormGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      brand: [null],
      expiration_date: [null],
      calories: [null],
      veggie: [false],
    });

    if (data.sweet) {
      this.sweetFormGroup.patchValue(data.sweet);
    }


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/sweet/' + id + '/get')
        .subscribe((response: any) => {
          this.sweetFormGroup.patchValue(response);
          this.currentRate = response.rating;
        });
    }
  }

  createSweet() {
    const sweet = this.sweetFormGroup.value;
    sweet.rating = this.currentRate;
    if (sweet.id) {
      this.http.put('/api/sweet/' + sweet.id + '/update', sweet)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/sweet/create', sweet)
        .subscribe((response: any) => {
          this.router.navigate(['/list-sweet/']);
        });
    }
  }
}
