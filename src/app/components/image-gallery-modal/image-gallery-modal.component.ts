import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  images: string[];
  startIndex: number;
}

@Component({
  selector: 'cfas-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ImageGalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getImage(index: number): string {
    return this.data.images[index].replace('-480', '');
  }

  get startIndex(): number {
    return this.data.startIndex;
  }
}
