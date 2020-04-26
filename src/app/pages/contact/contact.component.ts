
import { of } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { GdprService } from 'src/app/shared/services/gdpr.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cfas-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  showMap: boolean;
  infos = {
    name: 'google-maps',
    buttonIcon: 'place',
    details: 'Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA'
  };

  constructor(
    private snackBar: MatSnackBar,
    private gdprService: GdprService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.showMap = this.cookieService.hasCookieValue(this.infos.name);
  }

  ngOnDestroy() {
    this.snackBar.dismiss();
  }

  acceptMap(element: HTMLDivElement) {
    this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (resolve) {
        this.showMap = !this.showMap;
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      }
    });
  }

  displaySuccessMessage(success: boolean): void {
    const message = success ? 'Nachricht gesendet!' : 'Versand fehlgeschlagen!';
    this.snackBar.open(message, 'X');
  }
}
