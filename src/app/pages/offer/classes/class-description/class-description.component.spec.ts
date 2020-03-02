import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDescriptionComponent } from './class-description.component';

describe('ClassDescriptionComponent', () => {
  let component: ClassDescriptionComponent;
  let fixture: ComponentFixture<ClassDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
