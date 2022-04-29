import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDataTableComponent } from './candidate-data-table.component';

describe('CandidateDataTableComponent', () => {
  let component: CandidateDataTableComponent;
  let fixture: ComponentFixture<CandidateDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
