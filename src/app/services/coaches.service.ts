import { Injectable } from '@angular/core';
import { Coach } from '../models/coach';
import { CoachInterview } from '../models/coach-interview';
import { CoachTeaser } from '../models/coach-teaser';

let coaches: Coach[];

@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  get coachesTeaser(): CoachTeaser[] {
    return this.coaches.map((coach: Coach) => new CoachTeaser(coach));
  }

  getCoachInterview(name: string): CoachInterview {
    let coach: Coach = this.coaches.find((coach: Coach) =>
      coach.name.toLowerCase() === name.toLowerCase()
    );
    return new CoachInterview(coach);
  }

  get coaches(): Coach[] {
    return coaches;
  }
}

coaches = [
  {
    name: 'Anna',
    position: 'Headcoach',
    image: {
      url: 'assets/images/coaches/anna.jpg',
      alt: ''
    },
    teaser: [
      `Von klein auf hat Sie sich begeistert der Leichtathletik gewidmet. 
    Begonnen im Dreikampf für Kinder, hat es Sie über Crossläufe Richtung Wurf-/ Stoßdisziplinen wie Speer, 
    Diskus und Kugelstoßen verschlagen. 
    Vor gut 5 Jahren hat nun CrossFit Ihr Herz erobert.`,
      `Ihr Ziel: Mit Dir gemeinsam Deinen Weg zu mehr Lebensqualität, Freude und Gesundheit gehen!`,
      `Du möchtest mehr über Anna erfahren?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 2 Trainer (CF-L2)',
      'Gymnastics Certificate (2018)',
      'CrossFit Anatomy Certificate',
      'Lesson Planning Certificate',
      'Scaling Certificate',
      'Spot The Flaw Certificate',
      'Judges Course 2019 English Certificate (2019)',
      'Kinesiological Taping'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Headcoach bei CrossFit am See
      Betriebswirtin - aktuell in Elternzeit`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [`weil es der abwechslungsreichste Sport mit der spassigsten, 
      offensten und stärksten Community ist, den ich kenne`]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`seit 2014`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2015`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`GEMEINSCHAFT`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`einen Bar Muscle Up`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`eindeutig Hoodie`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Chips und Pizza`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Camping, Caipi, Couch`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`"ANNIE"`, `50 - 40 - 30 - 20 - 10`, `Double Unders`, `Sit-Ups`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Kochen, Garten, Campen`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Leichtathletik`]
      }
    ]
  },
  {
    name: 'Patrick',
    position: 'Coach',
    image: {
      url: 'assets/images/coaches/patrick.jpg',
      alt: ''
    },
    teaser: [
      `Pat ist der Comedian in unserer Truppe und hat immer einen flotten Spruch auf Lager. 
      Sport begleitet Ihn schon sein Leben lang. Über Judo, Fußball, 
      Tischtennis ist er beim Tennis gelandet und spielt es immer noch auf Mannschaftsebene. 
      Was er am CrossFit schätzt? Es hält Ihn nicht nur in seinem Sport fit, 
      sondern erleichtert Ihm den Alltag auf so viele Art und Weisen. Was ihr von Ihm erwartet könnt? 
      Viel Spaß, viel Motivation, tolle Momente und einen Ausgleich zum Alltag.`,
      `Du möchtest mehr über Pat erfahren?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)',
      'Master Sportwissenschaft',
      'B-Trainer Tennis Leistungssport WTB',
      'Grundstufe Ski Alpin & Ski Nordic DSLV',
      'Vereinsmanager C WLSB'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Marketing Manager bei
        ZF Sachs Micro Mobility`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [`Ich bewege mich, bleibe fit, habe einen Ausgleich zum Alltag und treffe viele Freunde`]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`seit 2013`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2020`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`SpaßundLeiden`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`Fit, gesund und aktiv bleiben`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Ach da gibt’s zu viele, um die aufzulisten!`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Freunde treffen, Couch oder Netflix`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`Chipper jeglicher Art`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Kochen, Tennis, Laufen`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Tennis, Laufen`]
      }
    ]
  },
]