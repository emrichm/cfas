import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLogoComponent } from './instagram-logo.component';

describe('InstagramLogoComponent', () => {
  let component: InstagramLogoComponent;
  let fixture: ComponentFixture<InstagramLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
