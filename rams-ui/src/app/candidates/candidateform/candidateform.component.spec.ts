import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateformComponent } from './candidateform.component';

describe('CandidateformComponent', () => {
  let component: CandidateformComponent;
  let fixture: ComponentFixture<CandidateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
