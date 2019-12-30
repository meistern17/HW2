import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-reseller',
  templateUrl: './edit-reseller.component.html',
  styleUrls: ['./edit-reseller.component.scss']
})
export class EditResellerComponent implements OnInit {
  resellerFormGroup;
  sweetOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit() {
    const data = this.route.snapshot.data;
    this.sweetOptions = data.sweetOptions;
    this.resellerFormGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      location: [null, this.locationValidator()],
      size: [null, Validators.min(1)],
      employees: [null, Validators.min(1)],
      bio: [false],
      sweets: [null],
    });

    if (data.reseller) {
      this.resellerFormGroup.patchValue(data.reseller);
    }
    this.sweetOptions = data.sweetOptions;


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/reseller/' + id + '/get')
        .subscribe((response) => {
          this.resellerFormGroup.patchValue(response);
        });
    }
  }

  createReseller() {
    const reseller = this.resellerFormGroup.value;
    if (reseller.id) {
      this.http.put('/api/reseller/' + reseller.id + '/update', reseller)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/reseller/create', reseller)
        .subscribe((response: any) => {
          this.router.navigate(['/list-reseller/']);
        });
    }
  }

  locationValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /wonderland/.test(control.value) || /space/.test(control.value);
      return forbidden ? {'forbiddenLocation': {value: control.value}} : null;
    };

  }
}
