import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerWrapperComponent } from './interviewer-wrapper.component';

describe('InterviewerWrapperComponent', () => {
  let component: InterviewerWrapperComponent;
  let fixture: ComponentFixture<InterviewerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
