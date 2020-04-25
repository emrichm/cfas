import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InsightsComponent } from './insights.component';

xdescribe("InsightsComponent", () => {
  let component: InsightsComponent;
  let fixture: ComponentFixture<InsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsightsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
