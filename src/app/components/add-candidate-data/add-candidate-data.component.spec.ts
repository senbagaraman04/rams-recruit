import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateDataComponent } from './add-candidate-data.component';

describe('AddCandidateDataComponent', () => {
  let component: AddCandidateDataComponent;
  let fixture: ComponentFixture<AddCandidateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCandidateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
