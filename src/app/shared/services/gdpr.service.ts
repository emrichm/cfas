import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GdprModalComponent } from '../components/gdpr-modal/gdpr-modal.component';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GdprService {
  constructor(
    private cookieService: CookieService,
    public dialog: MatDialog
  ) { }

  checkRegulation(externInfos: { name: string, text: string[], buttonIcon: string, url: string, details: string }): Promise<boolean> {
    if (this.cookieService.hasCookieValue(externInfos.name))
      return of(true).toPromise();

    return this.openModal(externInfos);
  };

  private async openModal(externInfos): Promise<boolean> {
    const dialogRef = this.dialog.open(GdprModalComponent, {
      width: '500px',
      data: externInfos
    });

    return await dialogRef.afterClosed().toPromise().then((result: boolean) => of(result).toPromise());
  }
}
