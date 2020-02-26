import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMonthComponent } from './event-month.component';

describe('EventMonthComponent', () => {
  let component: EventMonthComponent;
  let fixture: ComponentFixture<EventMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
