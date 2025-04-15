import { TestBed } from '@angular/core/testing';

import { IdcounterService } from './idcounter.service';

describe('IdcounterService', () => {
  let service: IdcounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdcounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
