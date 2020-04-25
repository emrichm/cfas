import { Injectable } from '@angular/core';
import { CrossfitDesc } from '../models/crossfit-desc';

let descriptions: CrossfitDesc[];

@Injectable({
  providedIn: 'root'
})
export class CrossfitService {

  get descriptions(): CrossfitDesc[] {
    return descriptions;
  }
}

descriptions = [
  {
    title: 'The Key',
    description: [
      `CrossFit ist der Schlüssel zu mehr Gesundheit, Fitness und einem nachhaltigen Lebensstil.`,
      `Dieser Sport ist für jeden Menschen geeignet, egal ob absoluter Sportanfänger oder langjährigen Leistungssportler.
       Es ist also völlig egal welche Ziele Du hast: Ob Du einen Ausgleich zum Arbeitsalltag benötigst,
       ein paar Kilogramm an Gewicht verlieren,
       einfach „nur“ fitter werden oder Deinen Trainingsplan ergänzen möchtest.`,
      `CrossFit bietet Dir für all dies eine fundierte Grundlage und dazu die beste Community weltweit!`
    ]
  },
  {
    title: 'Community',
    description: [
      `CrossFit am See ist eine von mehr als 15.000 Boxen weltweit und steht,
       wie CrossFit selbst, für seine einzigartige Community.
       Wir setzen stark auf unsere Gemeinschaft und motivieren uns gegenseitig jeden Tag zu einer besseren Version unser selbst zu werden.`,
      `Starte jetzt Dein training unter Freunden!`
    ]
  },
  {
    title: 'Workouts',
    description: [
      `Wie CrossFit es beschreibt: „the magic is in the movements“.
      Die Magie liegt in den Bewegungen, welche wir ausführen.
      Jeden Tag gibt es ein anderes Workout und dieses wird stets so angepasst,
      dass jeder seine individuellen Ziele verfolgen und erreichen wird.`,
      `Egal wie alt Du bist oder welches Fitnesslevel Du gerade hast.`,
      `Starte jetzt Dein Training bei uns, mit unserem heutigen Workout!`
    ]
  },
  {
    title: 'Lebenseinstellung',
    description: [
      `CrossFit kann auch Lebenseinstellung sein!
       Denn nur eine Kombination aus Bewegung und Ernährung bringt Dir nachhaltige Fitness und Gesundheit.`,
      `Lebe jetzt mit uns den CrossFit Lifestyle!`
    ]
  }
];
