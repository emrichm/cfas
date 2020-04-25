import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WodOverviewComponent } from './wod-overview.component';

xdescribe("WodOverviewComponent", () => {
  let component: WodOverviewComponent;
  let fixture: ComponentFixture<WodOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WodOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
