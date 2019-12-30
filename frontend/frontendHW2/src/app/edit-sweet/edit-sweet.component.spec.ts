import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSweetComponent } from './edit-sweet.component';

describe('EditSweetComponent', () => {
  let component: EditSweetComponent;
  let fixture: ComponentFixture<EditSweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
