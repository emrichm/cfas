import { Injectable } from '@angular/core';
import { DescriptionPart } from 'src/app/models/description-part';

@Injectable({
  providedIn: 'root'
})
export class DescriptionPartService {
  get massageDescriptionParts(): DescriptionPart[] {
    const massageDescriptionParts: DescriptionPart[] = [
      {
        title: 'Wir nehmen unseren Slogan „stay healthy“ sehr ernst.',
        text: `
        <p>Deshalb bieten wir in unserem Praxisraum eine ganzheitliche Betrachtung auf den Menschen.<br />Mit therapeutischen Anwendungen und wissenschaftlich fundierten Trainingsinterventionen verhelfen wir dir wieder zu einem schmerzfreien Leben.</p>
        <p>Kehre nach einer Verletzung wieder zu alter Stärke bzw. noch besser zurück.</p>
        <p>Bleibe langfristig schmerz- und sorgenfrei.</p>
        <p>In Form einer wohltuender Massage hervorragend als Geschenk geeignet. Sowohl an dich selbst, als auch an Freunde und Familie.</p>
        `,
        button: `<button mat-stroked-button routerLink="/offer/prices" class="mt-3 py-2 px-3 text-uppercase align-text-bottom">Preise</button>`,
        image: {
          url: 'assets/dynamic/images/werkstatt/Werkstatt-Praxisraum-768x1024.jpg',
          alt: '',
          position: 'bottom'
        }
      }
    ];
    return massageDescriptionParts;
  }
}
