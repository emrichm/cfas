import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageGalleryModalComponent } from './image-gallery-modal.component';

xdescribe('ImageGalleryModalComponent', () => {
  let component: ImageGalleryModalComponent;
  let fixture: ComponentFixture<ImageGalleryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
