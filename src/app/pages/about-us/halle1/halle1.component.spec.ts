import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Halle1Component } from './halle1.component';

xdescribe('Halle1Component', () => {
  let component: Halle1Component;
  let fixture: ComponentFixture<Halle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Halle1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
