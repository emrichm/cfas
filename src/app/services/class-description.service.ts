import { Injectable } from '@angular/core';
import { ClassDescription } from '../models/class-description';

@Injectable({
  providedIn: 'root'
})
export class ClassDescriptionService {
  get classDescriptions(): ClassDescription[] {
    const classDescriptions: ClassDescription[] = [
      {
        title: 'Basics',
        text: `Unsere Basic Class – Reihe dient der detaillierten Grundlagenschulung (Techniken und Umgang mit Equipment). 
        Wir empfehlen besonders Neueinsteigern zunächst den Besuch dieser Klassen. 
        Doch auch unseren Fortgeschrittenen Athleten legen wir diese Kurse, zur Wiederholung und Vertiefung ihrer Technik nahe. 
        Ein anstrengendes WOD ist selbstverständlich auch hier teil der Stunde.`,
        image: {
          url: 'assets/images/style-images/basics.jpeg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'Workout of the Day (WOD)',
        text: `Workout Of the Day, das Workout des Tages. 
        Hier bieten wir euch klassisches CrossFit „at it´s best!“ 
        Jeden Tag gibt es ein anderes Workout zusammengesetzt aus den Bereichen des Ausdauersports, 
        der Gymnastik und dem Gewichtheben, sowie Strongman.`,
        image: {
          url: 'assets/images/style-images/wod.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'Teamwod',
        text: `Teamworkouts sind WODS welche in 2-er, 3-er oder auch mal 4-er Teams 
        absolviert werden. Auch diese Workouts wechseln täglich im Aufbau und auch 
        in ihrer Intensität. Du kannst selbstverständlich auch ohne Teampartner kommen. 
        Den findest du vor Ort. Eine tolle Gelegenheit, andere Athleten aus der Box kennen zu lernen.`,
        image: {
          url: 'assets/images/style-images/teamwod.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'Gymnastics',
        text: `Die Gymnastics Class ist eine Technikstunde mit einem kleinen Workout 
        „FOR QUALITY“ am Ende. Hier gehen wir speziell auf die gymnastischen Bewegungen wie 
        beispielsweise den Handstand oder auch Ring Muscle ups ein und holen jeden Athleten dort ab wo er sich gerade befindet.`,
        image: {
          url: 'assets/images/style-images/gymnastics.jpeg',
          alt: '',
          position: 'bottom'
        }
      },
      {
        title: 'Weightlifting',
        text: `Im Weightlifting geht es um die schweren Gewichte. 
        Egal ob Klassik olympisches Gewichtheben oder Kraftdreikampf. 
        Hier geht es um die richtige Technik für schweres Gewicht.`,
        image: {
          url: 'assets/images/style-images/weightlifting.jpeg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'Performance',
        text: `Für alle, welche die grundlegenden Bewegungen des CrossFits bereits kennen und an ihrer Performance arbeiten wollen. 
        Neben Technik-, Kraft- und Ausdauertrainingseinheiten erwarten euch Strategieanalysen sowie anspruchsvolle Crossfit-Workouts, 
        in denen sowohl Anfänger als auch Fortgeschrittene über sich hinauswachsen können.`,
        image: {
          url: 'assets/images/style-images/performance.jpg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'Pumpin\' Iron',
        text: `Functional Bodybuilding ist ein Trainingsansatz, welchen wir einsetzen um deine Kraft gezielt zu steigern, 
        Muskuläre Ungleichgewichte zu korrigieren und deine Bewegungsqualität zu festigen.`,
        image: {
          url: 'assets/images/style-images/pumpin-iron.jpeg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'KettleBell',
        text: `Unter Anleitung eines erfahrenen RKC Trainers liegt der Fokus hier auf den Grundübungen mit der Kettlebell: 
        Swing, TGU, Snatch, Clean, Squat und Press. Es gibt Techniktraining und ein tolles Workout.`,
        image: {
          url: 'assets/images/style-images/kettle-bell.jpg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'Active Recovery',
        text: `Diese Stunde soll unseren Athleten eine Möglichkeit bieten, an ihren Rest-Days ihrem Körper etwas gutes zu tun. 
        In dieser Stunde werden Yoga, Dehn- und Mobilisationstechniken miteinander vereint.`,
        image: {
          url: 'assets/images/style-images/active-recovery.jpeg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'ROMWOD',
        text: `Optimize your Range Of Motion – Jederzeit zugänglich ist unsere ROMWOD-AREA für unsere Mitglieder. 
        Nicht nur die Erweiterung des Bewegungsradius, sondern auch die Erholung für Körper und Geist steht hier im Mittelpunkt.`,
        image: {
          url: 'assets/images/style-images/romwod.jpg',
          alt: '',
          position: ''
        }
      },
      {
        title: 'Open Gym',
        text: `Freies Training ohne Coach. 
        In Deiner Open Gym Stunde hast du die Möglichkeit außerhalb der regulär angebotenen Klassen an deinen Skills zu arbeiten.`,
        image: {
          url: 'assets/images/style-images/open-gym.jpeg',
          alt: '',
          position: ''
        }
      },
    ]
    return classDescriptions;
  }
}
