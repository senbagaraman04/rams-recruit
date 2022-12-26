/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardwrapperComponent } from './dasboardwrapper.component';

describe('DasboardwrapperComponent', () => {
  let component: DasboardwrapperComponent;
  let fixture: ComponentFixture<DasboardwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardwrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
