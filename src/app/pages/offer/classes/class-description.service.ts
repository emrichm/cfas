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
        text: `Workout Of the Day, das Workout des Tages: Dein ultimatives CrossFit-Erlebnis! Entdecke jeden Tag ein abwechslungsreiches und herausforderndes Training, das dir das Beste aus der Welt des CrossFit bietet. Lass dich von einer vielseitigen Mischung aus Ausdauersport, Gymnastik, Gewichtheben und Strongman-Disziplinen begeistern. Tauche ein in ein einzigartiges Fitnessabenteuer und entfalte dein volles Potential!`,
        image: {
          url: 'assets/static/images/style-images/wod-768x512.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'TeamWOD',
        text: `Erlebe gemeinsam beeindruckende Teamworkouts! Unsere WODs (Workouts of the Day) sind speziell für 2er-, 3er- oder sogar 4er-Teams konzipiert und bieten täglich abwechslungsreiche Herausforderungen sowohl in ihrem Aufbau als auch in ihrer Intensität. Keine Sorge, wenn du keinen Trainingspartner hast – bei uns wirst du vor Ort fündig und hast die großartige Möglichkeit, andere begeisterte Athleten aus unserer Box kennenzulernen. Zusammen erreicht ihr neue Höhen und stärkt euer Gemeinschaftsgefühl!`,
        image: {
          url: 'assets/static/images/style-images/teamwod-768x512.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'Gymnastics',
        text: `Entdecke die faszinierende Welt der Gymnastik in unserer Gymnastics Class! In dieser einzigartigen Technikstunde erwartet Dich ein inspirierendes Training, das mit einem sorgfältig ausgewählten "FOR QUALITY"-Workout abgerundet wird. Hier liegt der Fokus speziell auf den fesselnden gymnastischen Übungen ohne Zusatzgewichte, wie beispielsweise dem beeindruckenden Handstand oder den kraftvollen Ring Muscle-Ups. Ganz gleich, auf welchem Leistungsniveau Du Dich befindest – wir unterstützen jeden Athleten und jede Athletin individuell und begleiten Dich auf Deinem persönlichen Weg zur Verbesserung Deiner Technik und Fitness.`,
        image: {
          url: 'assets/static/images/style-images/gymnastics-768x512.jpeg',
          alt: '',
          position: 'bottom'
        }
      },
      {
        title: 'Performance',
        text: `Erlebe ein intensives CrossFit-Abenteuer, das speziell auf all jene zugeschnitten ist, die bereits mit den grundlegenden Bewegungen vertraut sind und ihre Leistung auf die nächste Stufe heben möchten. In unserem Kurs erwarten dich eine Mischung aus technikorientiertem Training, Kraftaufbau und Ausdauereinheiten, die dir helfen, deine Fähigkeiten zu verfeinern und zu erweitern. Doch damit nicht genug: Wir bieten auch spannende Strategieanalysen und herausfordernde CrossFit-Workouts, die sowohl Neulinge als auch erfahrene Athleten dazu inspirieren, ihre persönlichen Grenzen zu sprengen und gemeinsam neue Höhen zu erklimmen.`,
        image: {
          url: 'assets/static/images/style-images/performance-768x512.jpg',
          alt: '',
          position: 'center'
        }
      },
      {
        title: 'Oly - Olympic Weightlifting',
        text: `Erlebe die Faszination des olympischen Gewichthebens, auch bekannt als "Oly" – zwei beeindruckende Disziplinen: das Reißen (Snatch) und das Stoßen (Clean & Jerk)! In unserem speziellen Training erlernst du diese komplexen Übungen Schritt für Schritt, indem sie auf verschiedene Weise zerlegt und geübt werden. Dabei steht die Technik im Vordergrund, ohne das klassische WOD. Ob als Anfänger oder nach einer längeren Trainingspause – entdecke die Welt des Gewichthebens und verbessere deine Fähigkeiten in einer motivierenden Umgebung!`,
        image: {
          url: 'assets/static/images/style-images/weightlifting-768x512.jpeg',
          alt: '',
          position: 'center'
        }
      },
      // {
      //   title: 'Rookies',
      //   text: `Unsere Reihe an Rookie-Class dient der detaillierten Grundlagenschulung.
      //   Hier geht es sowohl um Techniken, den Umgang mit Equipment, den Begriffen und Workoutarten also auch darum wer wir sind und woran wir glauben.
      //   Wir empfehlen besonders Neueinsteigern zunächst den Besuch dieser Klassen.
      //   Doch auch unseren Fortgeschrittenen Athleten legen wir diese Kurse, zur Wiederholung und Vertiefung ihrer Technik, nahe.
      //   Ein anstrengendes WOD ist selbstverständlich auch hier Teil der Stunde.`,
      //   image: {
      //     url: 'assets/static/images/style-images/basics-768x428.jpeg',
      //     alt: '',
      //     position: 'center'
      //   }
      // },
      {
        title: 'Pumpin\' Iron',
        text: `Functional Bodybuilding: Entdecke die perfekte Symbiose aus Kraft, Balance und Bewegung. Entfalte dein volles körperliches Potential mit Functional Bodybuilding - dem ganzheitlichen Trainingsansatz, der deinen Körper auf effektive Weise transformiert. Durch gezielte Kraftsteigerung, Korrektur muskulärer Dysbalancen und Optimierung deiner Bewegungsqualität schafft es diese Methode, deine Fitness auf ein neues Level zu heben. Lass dich von der kraftvollen Synergie begeistern und erreiche neue persönliche Bestleistungen in deinem Training.`,
        image: {
          url: 'assets/static/images/style-images/pumpin-iron-768x457.jpeg',
          alt: '',
          position: 'top'
        }
      },
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
      {
        title: 'Active Recovery',
        text: `Gönnen Dir in dieser wohltuenden Stunde eine erholsame Auszeit für Körper und Geist. An Ruhetagen bieten wir mit dieser Einheit eine perfekte Balance aus Yoga, Dehnübungen und Mobilisationstechniken, um sowohl körperliche als auch mentale Regeneration zu fördern. Entdecken Sie die harmonische Verbindung dieser Elemente und unterstützen Sie Ihre Athleten dabei, neue Energie zu tanken und ihre Leistungsfähigkeit zu steigern.`,
        image: {
          url: 'assets/static/images/style-images/active-recovery-768x512.jpeg',
          alt: '',
          position: 'center center'
        }
      },
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
        text: `Erlebe das ultimative Trainingsvergnügen ganz nach Deinen Wünschen: Im Open Gym kannst Du ganz ohne Trainer auf eigene Faust trainieren und an Deinen Fähigkeiten feilen. Nutze diese einzigartige Gelegenheit, um außerhalb der regulären Kurse Deine Skills zu perfektionieren und Deine persönlichen Fitnessziele zu erreichen. Komm und entdecke die Freiheit, Dein Training selbst in die Hand zu nehmen!`,
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
