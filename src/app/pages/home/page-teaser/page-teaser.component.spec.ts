import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeaserComponent } from './page-teaser.component';

describe('PageTeaserComponent', () => {
  let component: PageTeaserComponent;
  let fixture: ComponentFixture<PageTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
