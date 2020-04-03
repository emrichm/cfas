import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cfas-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ImageGalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public highRes: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getImage(): string {
    return this.highRes;
  }
}
