import { TestBed } from '@angular/core/testing';

import { CanidateDataServiceService } from './canidate-data-service.service';

describe('CanidateDataServiceService', () => {
  let service: CanidateDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanidateDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
