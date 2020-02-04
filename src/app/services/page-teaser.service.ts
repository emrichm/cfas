import { Injectable } from '@angular/core';
import { PageTeaser } from '../models/page-teaser';

@Injectable({
  providedIn: 'root'
})
export class PageTeaserService {
  get pagesTeaser(): PageTeaser[] {
    const pagesTeaser: PageTeaser[] = [
      {
        title: 'CFaS Coaches-Team',
        paragraphs: [
          `Du möchtest unsere Coaches kennen lernen? 
          Wir stellen Sie vor! Persönliches und Qualifikationen findest Du hier.`
        ],
        buttonText: 'Meet \'n Greet',
        image: {
          url: 'assets/images/GruppeHandstand3.jpg',
          alt: ''
        }
      },
      {
        title: 'CFaS Philosophie',
        paragraphs: [
          `Bei uns steht die COMMUNITY im Mittelpunkt. 
          Unser Leitbild und die damit verbundenen Werte HAPPY, HEALTHY, HUNGRY stellen wir Dir hier vor.`
        ],
        buttonText: 'Informier Dich!',
        image: {
          url: 'assets/images/fitness-pyramide.jpg',
          alt: ''
        }
      },
      {
        title: 'HALLE EINS',
        paragraphs: [
          `Die Halle EINS ist die „Küche“ unserer Box. 
          Erste Anlaufstelle und Hauptbühne der CrossFit am See Athleten.`,
          `Hier hat alles begonnen und hier findet klassisches CrossFit statt.`
        ],
        buttonText: 'Take a look',
        image: {
          url: 'assets/images/halle1-rower-bg-logo.jpg',
          alt: ''
        }
      },
      {
        title: 'WERKSTATT',
        paragraphs: [
          `Unsere zweite Halle, die WERKSTATT, 
          ist reserviert für Open Gym und jegliche Art an Spezialkursen.`,
          `Hier gibt es den Extraplatz zum individuellen trainieren für alle.`
        ],
        buttonText: 'Umsehen',
        image: {
          url: 'assets/images/werkstatt-top.jpg',
          alt: ''
        }
      },
      {
        title: 'ROMWOD',
        paragraphs: [
          `Unser ROMWOD-Bereich ist der Werkstatt angegliedert und dient der Erweiterung deiner „Range of Motion“.`,
          `Hier kannst Du jederzeit per Video angeleitet an Deiner Mobilität, Flexibilität, Atmung und Entspannung arbeiten.`
        ],
        buttonText: 'See the Sensation',
        image: {
          url: 'assets/images/romwod-sign.jpg',
          alt: ''
        }
      },
      {
        title: 'Kursplan & Klassen',
        paragraphs: [
          `Beschreibungen der verschiedenen Klassen, 
          sowie den aktuellen Kursplan findest du auf den folgenden Seiten.`
        ],
        buttonText: 'Ansehen',
        image: {
          url: 'assets/images/teamup-calender.png',
          alt: ''
        }
      },
      {
        title: 'Preise',
        paragraphs: [
          `Du möchtest Dich informieren was eine Mitgliedschaft bei CrossFit am See kostet? 
          Dann bist du hier genau richtig.
          Wir bieten Dir faire Preise für klassisches CrossFit und das Etwas an mehr!`
        ],
        buttonText: 'Informier Dich!',
        image: {
          url: 'assets/images/mitgliedschaften.jpg',
          alt: ''
        }
      }
    ]
    return pagesTeaser;
  }
}
