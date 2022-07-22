import { Injectable } from '@angular/core';
import { DescriptionPart } from '../../../models/description-part';

@Injectable({
  providedIn: 'root'
})
export class ClassDescriptionService {
  get classDescriptions(): DescriptionPart[] {
    const classDescriptions: DescriptionPart[] = [
      {
        title: 'Workout Of the Day (WOD)',
        text: `Workout Of the Day, das Workout des Tages.
        Hier bieten wir euch klassisches CrossFit „at it's finest!“.
        Jeden Tag gibt es ein anderes Workout, zusammengesetzt aus den Bereichen des Ausdauersports,
        der Gymnastik, dem Gewichtheben sowie Disziplinen des Strongman.`,
        image: {
          url: 'assets/static/images/style-images/wod-768x512.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'TeamWOD',
        text: `Teamworkouts sind WODS, welche in 2-er, 3-er oder auch mal 4-er Teams
        absolviert werden. Auch diese Workouts wechseln täglich im Aufbau und auch
        in ihrer Intensität. Du kannst selbstverständlich auch ohne Teampartner kommen.
        Den findest Du vor Ort. Eine tolle Gelegenheit, andere Athleten aus der Box kennenzulernen.`,
        image: {
          url: 'assets/static/images/style-images/teamwod-768x512.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'Gymnastics',
        text: `Die Gymnastics Class ist eine Technikstunde mit einem kleinen Workout
        „FOR QUALITY“ am Ende. Hier gehen wir speziell auf die gymnastischen Bewegungen, die keine Zusatzgewichte verwenden, wie
        den Handstand oder auch Ring Muscle-Ups, ein und holen jede:n Athleten oder Athletin dort ab, wo er oder sie sich gerade befindet.`,
        image: {
          url: 'assets/static/images/style-images/gymnastics-768x512.jpeg',
          alt: '',
          position: 'bottom'
        }
      },
      {
        title: 'Performance',
        text: `Für alle, welche die grundlegenden Bewegungen des CrossFit bereits kennen und an ihrer Performance arbeiten wollen.
        Neben Technik-, Kraft- und Ausdauertrainingseinheiten erwarten euch Strategieanalysen sowie anspruchsvolle CrossFit-Workouts,
        in denen sowohl Anfänger als auch Fortgeschrittene über sich hinauswachsen können.`,
        image: {
          url: 'assets/static/images/style-images/performance-768x512.jpg',
          alt: '',
          position: 'center'
        }
      },
      {
        title: 'Oly - Olympic Weightlifting',
        text: `Olympisches Gewichtheben, aka Oly - Zwei Übungen, der Snatch und der Clean & Jerk!
        Um die Komplexität dieser Übungen meistern zu können werden diese hier auf unterschiedliche Weisen herunter gebrochen und geübt.
        Der Fokus liegt dabei auf der Technik und es findet kein WOD im klassischen Sinne statt.
        Auch perfekt für Einsteiger, oder nach einer längeren Pause, geeignet.`,
        image: {
          url: 'assets/static/images/style-images/weightlifting-768x512.jpeg',
          alt: '',
          position: 'center'
        }
      },
      {
        title: 'Rookies',
        text: `Unsere Reihe an Rookie-Class dient der detaillierten Grundlagenschulung.
        Hier geht es sowohl um Techniken, den Umgang mit Equipment, den Begriffen und Workoutarten also auch darum wer wir sind und woran wir glauben.
        Wir empfehlen besonders Neueinsteigern zunächst den Besuch dieser Klassen.
        Doch auch unseren Fortgeschrittenen Athleten legen wir diese Kurse, zur Wiederholung und Vertiefung ihrer Technik, nahe.
        Ein anstrengendes WOD ist selbstverständlich auch hier Teil der Stunde.`,
        image: {
          url: 'assets/static/images/style-images/basics-768x428.jpeg',
          alt: '',
          position: 'center'
        }
      },
      // {
      //   title: 'Pumpin\' Iron',
      //   text: `Functional Bodybuilding ist ein Trainingsansatz, welchen wir einsetzen, um deine Kraft gezielt zu steigern,
      //   muskuläre Ungleichgewichte zu korrigieren und deine Bewegungsqualität zu festigen.`,
      //   image: {
      //     url: 'assets/static/images/style-images/pumpin-iron-768x457.jpeg',
      //     alt: '',
      //     position: 'top'
      //   }
      // },
      // {
      //   title: 'KettleBell',
      //   text: `Unter Anleitung eines erfahrenen RKC Trainers liegt der Fokus hier auf den Grundübungen mit der Kettlebell:
      //   Swing, TGU, Snatch, Clean, Squat und Press. Es gibt Techniktraining und ein tolles Workout.`,
      //   image: {
      //     url: 'assets/static/images/style-images/kettle-bell-768x424.jpg',
      //     alt: '',
      //     position: 'bottom'
      //   }
      // },
      // {
      //   title: 'Active Recovery',
      //   text: `Diese Stunde soll unseren Athleten eine Möglichkeit bieten, an ihren Rest-Days ihrem Körper etwas Gutes zu tun.
      //   In dieser Stunde werden Yoga-, Dehn- und Mobilisationstechniken miteinander vereint.`,
      //   image: {
      //     url: 'assets/static/images/style-images/active-recovery-768x512.jpeg',
      //     alt: '',
      //     position: 'center center'
      //   }
      // },
      // {
      //   title: 'ROMWOD',
      //   text: `Optimize your Range Of Motion – Jederzeit für unsere Mitglieder zugänglich ist unsere ROMWOD-AREA.
      //   Nicht nur die Erweiterung des Bewegungsradius, sondern auch die Erholung für Körper und Geist stehen hier im Mittelpunkt.`,
      //   image: {
      //     url: 'assets/static/images/style-images/romwod-768x512.jpg',
      //     alt: '',
      //     position: ''
      //   }
      // },
      {
        title: 'Open Gym',
        text: `Freies Training ohne Coach.
        In Deiner Open Gym Stunde hast Du die Möglichkeit, außerhalb der regulär angebotenen Klassen an deinen Skills zu arbeiten.`,
        image: {
          url: 'assets/static/images/style-images/open-gym-768x512.jpeg',
          alt: '',
          position: 'center'
        }
      },
    ];
    return classDescriptions;
  }
}
