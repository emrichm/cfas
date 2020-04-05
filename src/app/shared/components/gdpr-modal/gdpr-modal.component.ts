import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExternInformation } from '../../models/extern-information';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'cfas-gdpr-modal',
  templateUrl: './gdpr-modal.component.html',
  styleUrls: ['./gdpr-modal.component.scss']
})
export class GdprModalComponent implements OnInit {
  remember = false;
  externInfos: ExternInformation;

  constructor(
    private cookieService: CookieService,
    private dialogRef: MatDialogRef<GdprModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ExternInformation
  ) { }

  ngOnInit() {
    this.externInfos = this.data;
  }

  submit(follow: boolean) {
    if (!follow) {
      this.dialogRef.close(false);
      return;
    }

    if (this.remember) {
      this.cookieService.addCookieLocal(this.data.name);
    } else {
      this.cookieService.addCookieSession(this.data.name);
    }
    this.dialogRef.close(true);
  }

}
