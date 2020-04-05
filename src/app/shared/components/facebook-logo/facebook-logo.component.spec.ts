import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLogoComponent } from './facebook-logo.component';

describe('FacebookLogoComponent', () => {
  let component: FacebookLogoComponent;
  let fixture: ComponentFixture<FacebookLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
