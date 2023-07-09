import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerlistComponent } from './interviewerlist.component';

describe('InterviewerlistComponent', () => {
  let component: InterviewerlistComponent;
  let fixture: ComponentFixture<InterviewerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
