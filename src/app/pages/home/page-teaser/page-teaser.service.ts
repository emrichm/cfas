import { Injectable } from '@angular/core';
import { PageTeaser } from '../../../models/page-teaser';

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
          Wir stellen sie vor! Persönliches und Qualifikationen findest Du hier.`
        ],
        button: {
          text: 'Meet \'n Greet',
          link: '/our-box/coaches'
        },
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
        button: {
          text: 'Informier Dich!',
          link: '/our-box/philosophy'
        },
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
        button: {
          text: 'Take a look',
          link: '/our-box/halle1'
        },
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
          `Hier gibt es den Extraplatz zum individuellen Trainieren für alle.`
        ],
        button: {
          text: 'Umsehen',
          link: '/our-box/werkstatt'
        },
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
        button: {
          text: 'See the Sensation',
          link: '/our-box/romwod'
        },
        image: {
          url: 'assets/images/romwod-sign.jpg',
          alt: ''
        }
      },
      {
        title: 'Kursplan & Klassen',
        paragraphs: [
          `Beschreibungen der verschiedenen Klassen 
          sowie den aktuellen Kursplan findest Du auf den folgenden Seiten.`
        ],
        button: {
          text: 'Ansehen',
          link: '/offer/schedule'
        },
        image: {
          url: 'assets/images/teamup-calendar.png',
          alt: ''
        }
      },
      {
        title: 'Preise',
        paragraphs: [
          `Du möchtest Dich informieren, was eine Mitgliedschaft bei CrossFit am See kostet? 
          Dann bist Du hier genau richtig.
          Wir bieten Dir faire Preise für klassisches CrossFit und das gewisse Etwas an mehr!`
        ],
        button: {
          text: 'Informier Dich!',
          link: '/offer/prices'
        },
        image: {
          url: 'assets/images/style-images/mitgliedschaften.jpg',
          alt: ''
        }
      }
    ]
    return pagesTeaser;
  }
}
