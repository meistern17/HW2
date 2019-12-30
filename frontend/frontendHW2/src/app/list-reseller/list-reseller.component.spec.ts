import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResellerComponent } from './list-reseller.component';

describe('ListResellerComponent', () => {
  let component: ListResellerComponent;
  let fixture: ComponentFixture<ListResellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
