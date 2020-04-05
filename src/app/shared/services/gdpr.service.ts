import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GdprModalComponent } from '../components/gdpr-modal/gdpr-modal.component';
import { ExternInformation } from '../models/extern-information';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GdprService {
  constructor(
    private cookieService: CookieService,
    public dialog: MatDialog
  ) { }

  checkRegulation(externInfos: ExternInformation): Promise<boolean> {
    if (this.cookieService.hasCookieValue(externInfos.name))
      return of(true).toPromise();

    return this.openModal(externInfos);
  };

  private async openModal(externInfos: ExternInformation): Promise<boolean> {
    const dialogRef = this.dialog.open(GdprModalComponent, {
      width: '500px',
      data: externInfos
    });

    return await dialogRef.afterClosed().toPromise().then((result: boolean) => of(result).toPromise());
  }
}
