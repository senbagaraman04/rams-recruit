import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerListComponent } from './interviewer-list.component';

describe('InterviewerListComponent', () => {
  let component: InterviewerListComponent;
  let fixture: ComponentFixture<InterviewerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
