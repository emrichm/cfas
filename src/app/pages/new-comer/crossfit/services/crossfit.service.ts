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
      `Entdecke CrossFit: Der Weg zu einem gesünderen, fitteren und nachhaltigeren Leben!`,
      `Unabhängig von deinem sportlichen Hintergrund, ob Einsteiger oder erfahrener Athlet, CrossFit ist für jeden Menschen ideal geeignet.Deine Ziele sind dabei so vielfältig wie die Möglichkeiten: Ob du einen ausgleichenden Kontrast zum Berufsalltag suchst, einige Kilos verlieren möchtest, deine allgemeine Fitness steigern oder deinen Trainingsplan bereichern willst – CrossFit ist die Antwort.`,
      `Erlebe die fundierte Basis, die CrossFit bietet, und werde Teil der besten, unterstützenden Community weltweit!`
    ]
  },
  {
    title: 'Community',
    description: [
      `Erlebe CrossFit am See - Ein Fitnessparadies inmitten der weltweiten CrossFit - Familie! Mit über 15.000 Boxen rund um den Globus sind wir stolz darauf, ein Teil dieser lebendigen und einzigartigen Gemeinschaft zu sein.Bei uns steht Zusammenhalt und gegenseitige Motivation im Fokus, sodass wir gemeinsam täglich aufs Neue an einer verbesserten Version von uns selbst arbeiten.`,
      'Lass Dich von der Begeisterung anstecken und starte jetzt Dein unvergessliches Trainingserlebnis inmitten einer Gruppe von Freunden, die zu Deiner zweiten Familie werden!'
    ]
  },
  {
    title: 'Workouts',
    description: [
      `Wie es CrossFit treffend ausdrückt: "The magic is in the movements" - Die Magie liegt in den Bewegungen, die wir vollführen. Jeden Tag erwartet dich ein abwechslungsreiches und einzigartiges Workout, das individuell angepasst wird, um sicherzustellen, dass du deine persönlichen Ziele verfolgen und erreichen kannst.`,
      `Unabhängig von deinem Alter oder Fitnesslevel bist du herzlich eingeladen, an unserer Trainingsvielfalt teilzuhaben.`,
      `Lass dich heute noch von der Magie der Bewegung verzaubern und starte dein Training bei uns - mit unserem faszinierenden Workout des Tages!`
    ]
  },
  {
    title: 'Lebenseinstellung',
    description: [
      `CrossFit kann auch Lebenseinstellung sein! Denn nur eine Kombination aus Bewegung und Ernährung bringt Dir nachhaltige Fitness und Gesundheit.`,
      `Lebe jetzt mit uns den CrossFit Lifestyle!`
    ]
  }
];
