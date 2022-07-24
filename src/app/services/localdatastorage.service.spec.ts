import { TestBed } from '@angular/core/testing';

import { LocaldatastorageService } from './localdatastorage.service';

describe('LocaldatastorageService', () => {
  let service: LocaldatastorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaldatastorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
