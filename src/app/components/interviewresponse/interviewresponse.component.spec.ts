import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewresponseComponent } from './interviewresponse.component';

describe('InterviewresponseComponent', () => {
  let component: InterviewresponseComponent;
  let fixture: ComponentFixture<InterviewresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
