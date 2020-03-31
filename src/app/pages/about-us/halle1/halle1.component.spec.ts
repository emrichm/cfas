import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Halle1Component } from './halle1.component';

describe('Halle1Component', () => {
  let component: Halle1Component;
  let fixture: ComponentFixture<Halle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Halle1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return urls without -480', () => {
    expect(component.images[0]).toEqual('/assets/images/halle1/IMG_0927.jpeg');
  })
});