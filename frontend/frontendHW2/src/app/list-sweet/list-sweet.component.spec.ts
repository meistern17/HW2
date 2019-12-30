import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSweetComponent } from './list-sweet.component';

describe('ListSweetComponent', () => {
  let component: ListSweetComponent;
  let fixture: ComponentFixture<ListSweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
