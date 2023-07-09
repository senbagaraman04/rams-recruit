import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapinterviewComponent } from './mapinterview.component';

describe('MapinterviewComponent', () => {
  let component: MapinterviewComponent;
  let fixture: ComponentFixture<MapinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapinterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
