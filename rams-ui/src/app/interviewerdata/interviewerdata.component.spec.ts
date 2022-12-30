import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerdataComponent } from './interviewerdata.component';

describe('InterviewerdataComponent', () => {
  let component: InterviewerdataComponent;
  let fixture: ComponentFixture<InterviewerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
