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
      url: 'assets/static/images/coaches/Anna.jpg',
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
      url: 'assets/static/images/coaches/Pat.jpg',
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
  {
    name: 'Axel',
    position: 'Coach',
    image: {
      url: 'assets/static/images/coaches/Axel.jpg',
      alt: ''
    },
    teaser: [
      `Unser Axel hat schon immer gerne verschiedene Sportarten betrieben – egal ob Tennis, Judo, Brazilian-Jiu-Jitsu oder Bouldern.`,
      `CrossFit bietet für ihn aufgrund der Vielseitigkeit die beste Grundlage für jegliche sportliche Aktivität
       und sämtliche Herausforderungen des Alltags. Als Coach bei CrossFit am See,
       liegt es Ihm am Herzen Dir diese Basis bestmöglich zu vermitteln und Dich Schritt für Schritt besser zu machen.`,
      `Darf es ein wenig mehr zu Axel sein?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Beteiligungscontroller`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [`Weil ich das Gefühl mag nach einem anstrengenden Arbeitstag den Kopf abzuschalten und mich auszupowern`]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`seit 2013`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2018`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`Suchtmittel`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`Bar Muscle Up`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Kuchen und Pizza`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Ins Kino oder ins Theater gehen`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`"Diane"
21-15-9
Deadlifts
Handstand Push-Up`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Aktien`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Brazilian Jiu-Jitsu`]
      }
    ]
  },
  {
    name: 'Silvia',
    position: 'Coach',
    image: {
      url: 'assets/static/images/coaches/Silvia.jpg',
      alt: ''
    },
    teaser: [
      `Silvia macht bereits seit sieben Jahren CrossFit.
       Im Januar 2017 hat Sie angefangen hauptberuflich als CrossFit-Coach
       zu arbeiten und 2018 zusammen mit Anna CrossFit am See gegründet.`,
      `Zwischenzeitlich hat Sie sich zwei Jahre voll aufs olympische Gewichtheben konzentriert,
       den Fokus in den letzten beiden Jahren vermehrt auf CrossFit während und nach der Schwangerschaft gelegt.
       Sie freut sich darauf Dir eine saubere Technik zu vermitteln und so für verletzungsfreien Spaß an der Hantel zu sorgen.`,
      `Weitere Infos über Silvia?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)',
      'CrossFit Level 2 (CF-L2)',
      'Pregnancy and Postpartum Athleticism Coach',
      'C-Lizenz Leistungssport Gewichtheben',
      'C-Lizenz Breitensport Kraft und Fitness',
      'CrossFit Lesson Planning Course',
      'CrossFit Spot the flaw Course',
      'CrossFit Scaling Course'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Headcoach bei CrossFit am See und Mama`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [`CrossFit macht Spaß und hat Sinn. Außerdem sind die Leute super.`]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`seit 2013`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2017`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`Wundertüte`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`stabile Mitte wiederfinden`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie!`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [
          `gibts nicht. Ich betrachte keine meiner Mahlzeiten als „cheat“.
           Meine Ernährung ist eine Lebenseinstellung, und ich bescheiße mich nicht selbst. Aber: ich mag Kuchen 😉`
        ]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`ich verstehe die Frage nicht - habe ein Kleinkind zuhause`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`Open 14.5/16.5:
21-18-15-12-9-6-3
Thruster
Burpees over Bar`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Gemüsegärtnern`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [
          `alles, was mein Dorf hergegeben hat: 
           Ballet, Turnen, Tennis, Fußball, Jujutsu, Handball, am längsten aber Schwimmen: 13 Jahre DLRG`
        ]
      }
    ]
  },
  {
    name: 'Mark',
    position: 'Coach',
    image: {
      url: 'assets/static/images/coaches/Mark.jpg',
      alt: ''
    },
    teaser: [
      `Bereits bevor Mark CrossFit kennenlernte, hat er versucht sein Fitness-Training so abwechslungsreich wie möglich zu gestalten.
       So war es nicht verwunderlich, dass er von CrossFit sofort fasziniert war und es bis heute ist.`,
      `Neben seinen Tätigkeiten in der Softwareentwicklung gönnt er sich gerne den Ausgleich im Workout
       und freut sich darauf auch Dich durch Deine besten 60 Minuten deines Tages zu begleiten.`,
      `Du möchtest Mark noch besser kennenlernen?v`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Softwareentwickler`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [
          `Kurzfristig betrachtet freue ich mich über die Community und über die abwechslungsreiche Art 
           ein gesünderes Leben zu führen. Langfristig betrachtet möchte ich auch noch in hohem Alter vital und voller Leben sein können.`
        ]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [
          `2014 habe ich von CrossFit gehört und seit her bestmöglich zuhause und in Fitness-Studios angewendet.
           Seit Juli 2018 bin ich bei CrossFit am See.`
        ]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2019`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`Freundetreff`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`Butterfly Pull-ups 
Handstand Walk`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie!`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Pizza`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Ein Kurztrip in eine benachbarte Stadt, an einen fremden Ort.`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`"HELEN" 
For Time: 
3 rounds of
400m Run
21 Kettle-Bell Swings
12 Pull-Ups`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Billard`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Klassisches Fitness-Studio`]
      }
    ]
  },
  {
    name: 'Jan',
    position: 'Coach',
    image: {
      url: 'assets/static/images/coaches/Jan.jpg',
      alt: ''
    },
    teaser: [
      `Hier kommt Jan. In den letzten 8 Jahren hat er im Powerliftingsport 30kg Körpergewicht zugelegt 
       und später im CrossFit / für einen Marathon wieder abgebaut. Egal welche Richtung Du einschlagen möchtest,
       Jan freut sich Dich zu unterstützen um gemeinsam besser zu werden!`,
      `Dich interessiert noch mehr über Jan?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)',
      'CrossFit Spot the flaw Course',
      'CrossFit Scaling Course',
      'CrossFit Anatomy Certificate',
      'CrossFit Running'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Pilot`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [`Alle Prinzipien und Werte die ich im CrossFit lerne lassen sich auf das normale Leben übertragen und andersherum.`]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`2017`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2018`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`zu Hause`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`+ 1.5 kg Muskelmasse`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Ben & Jerry‘s`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Arbeiten 🙂`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`DT
5 rounds for time:
12 Deadlifts
9 Hang Power Cleans
6 Push Jerks`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Alles im und um den Bodensee. Wandern, Baden`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Powerlifting​`]
      }
    ]
  },
  {
    name: 'Colin',
    position: 'Coach',
    image: {
      url: 'assets/static/images/coaches/Colin.jpg',
      alt: ''
    },
    teaser: [
      `Für Colin gehören Sport und Bewegung einfach zu einem ausgeglichenen und glücklichen Leben dazu.
       Zu Hause im Snowboarden und Basketball, war CrossFit für ihn zunächst nur ein ergänzendes Fitnesstraining,
       entwickelte es sich schnell zu seiner neuen Leidenschaft.
       CrossFit hilft einem, auch in völlig anderen Sportarten besser zu werden und sein Potential als Athlet voll zu entfalten.`,
      `Als Coach möchte er dir helfen, deine Fitness zu verbessern und dich auf deinem ganz individuellen Weg begleiten,
       egal welche Ziele du hast.`,
      `Mehr über Colin?`
    ],
    buttonText: 'Zum Interview',
    qualifications: [
      'CrossFit Level 1 Trainer (CF-L1)'
    ],
    interview: [
      {
        question: 'Was machst Du beruflich?',
        answer: [`Gymnasial- und Berufsschullehrer`]
      },
      {
        question: 'Warum machst Du CrossFit?',
        answer: [
          `Weil es der perfekte Ausgleich zu meinem „Schreibtischjob“ ist und es einfach verdammt viel Spaß macht,
           die Grenzen der eigenen physischen Leistungsfähigkeit ständig neu zu definieren.`
        ]
      },
      {
        question: 'Seit wann machst Du CrossFit?',
        answer: [`2014`]
      },
      {
        question: 'Seit wann bist Du Coach?',
        answer: [`seit 2020`]
      },
      {
        question: 'CrossFit am See in einem Wort?',
        answer: [`LEIDENschaft`]
      },
      {
        question: 'Dein Ziel 2020?',
        answer: [`Das sind so viele… man kann sie aber ganz gut unter „fitter werden“ zusammenfassen.`]
      },
      {
        question: 'Bist Du Team Hoodie oder Zipper?',
        answer: [`Hoodie`]
      },
      {
        question: 'Dein Lieblings "CHEAT"-Meal?',
        answer: [`Ben & Jerry‘s mit Milch und Oreo-Cookies`]
      },
      {
        question: 'Dein Tipp für Samstag Abend?',
        answer: [`Netflix + Essen`]
      },
      {
        question: 'Dein Lieblings-WOD?',
        answer: [`"AMANDA" 
9-7-5
Muscle-Ups
Squat Snatches`]
      },
      {
        question: 'Deine Hobbies neben CrossFit?',
        answer: [`Snowboarden`]
      },
      {
        question: 'Aus welchem Sport kommst Du?',
        answer: [`Basketball`]
      }
    ]
  }
]