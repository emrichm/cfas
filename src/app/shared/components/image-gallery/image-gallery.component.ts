
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryModalComponent } from '../image-gallery-modal/image-gallery-modal.component';

@Component({
  selector: 'cfas-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
  @Input() images: string[] = [];
  slideIndex = 0;

  constructor(public dialog: MatDialog) { }

  openModal(startIndex: number): void {
    this.dialog.open(ImageGalleryModalComponent, {
      data: { images: this.images, startIndex: startIndex },
      backdropClass: 'backdrop-background'
    });
  }

  closeModal(): void {
    document.getElementById('imgModal').style.display = 'none';
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex: number): void;

  // TODO refactoring/optimization
  showSlides(n: number) {
    const slides = document.getElementsByClassName('img-slides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[this.slideIndex - 1].style.display = 'block';

    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}
