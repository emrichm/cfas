
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cfas-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showMap = false;

  constructor(private snackBar: MatSnackBar) { }

  acceptMap() {
    this.showMap = !this.showMap;
  }

  displaySuccessMessage(success: boolean): void {
    const message = success ? 'Nachricht gesendet!' : 'Versand fehlgeschlagen!';
    this.snackBar.open(message, 'X');
  }
}
