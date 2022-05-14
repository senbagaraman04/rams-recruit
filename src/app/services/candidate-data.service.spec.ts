import { TestBed } from '@angular/core/testing';

import { CandidateDataService } from './candidate-data.service';

describe('CandidateDataService', () => {
  let service: CandidateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
