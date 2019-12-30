import { TestBed } from '@angular/core/testing';

import { SweetService } from './sweet.service';

describe('SweetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetService = TestBed.get(SweetService);
    expect(service).toBeTruthy();
  });
});
