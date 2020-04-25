import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WerkstattComponent } from './werkstatt.component';

xdescribe("WerkstattComponent", () => {
  let component: WerkstattComponent;
  let fixture: ComponentFixture<WerkstattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WerkstattComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkstattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
