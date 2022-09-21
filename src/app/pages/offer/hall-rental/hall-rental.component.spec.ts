import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallRentalComponent } from './hall-rental.component';

describe('HallRentalComponent', () => {
  let component: HallRentalComponent;
  let fixture: ComponentFixture<HallRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
