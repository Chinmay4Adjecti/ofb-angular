import { TestBed } from '@angular/core/testing';

import { OfbService } from './ofb.service';

describe('OfbService', () => {
  let service: OfbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
