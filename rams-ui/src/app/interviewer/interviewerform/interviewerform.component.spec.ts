import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerformComponent } from './interviewerform.component';

describe('InterviewerformComponent', () => {
  let component: InterviewerformComponent;
  let fixture: ComponentFixture<InterviewerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
