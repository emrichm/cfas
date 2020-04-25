import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachesOverviewComponent as CoachesComponent } from './coaches.component';

xdescribe("CoachesComponent", () => {
  let component: CoachesComponent;
  let fixture: ComponentFixture<CoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
