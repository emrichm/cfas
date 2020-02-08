import { Component } from '@angular/core';

@Component({
  selector: 'cfas-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showMap = false;
  constructor() { }

  acceptMap() {
    this.showMap = !this.showMap;
  }

}
