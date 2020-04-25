import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachTeaserComponent } from './coach-teaser.component';

xdescribe("CoachTeaserComponent", () => {
  let component: CoachTeaserComponent;
  let fixture: ComponentFixture<CoachTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachTeaserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
