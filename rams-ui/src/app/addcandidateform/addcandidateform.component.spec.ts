/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandidateformComponent } from './addcandidateform.component';

describe('AddcandidateformComponent', () => {
  let component: AddcandidateformComponent;
  let fixture: ComponentFixture<AddcandidateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcandidateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcandidateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
