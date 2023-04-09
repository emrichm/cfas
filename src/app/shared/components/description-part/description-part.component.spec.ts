import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPartComponent } from './description-part.component';

describe('DescriptionPartComponent', () => {
  let component: DescriptionPartComponent;
  let fixture: ComponentFixture<DescriptionPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
