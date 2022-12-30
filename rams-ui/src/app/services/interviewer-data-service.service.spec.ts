import { TestBed } from '@angular/core/testing';

import { InterviewerDataServiceService } from './interviewer-data-service.service';

describe('InterviewerDataServiceService', () => {
  let service: InterviewerDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewerDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
