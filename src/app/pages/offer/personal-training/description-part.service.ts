import { Injectable } from '@angular/core';
import { DescriptionPart } from 'src/app/models/description-part';

@Injectable({
  providedIn: 'root'
})
export class DescriptionPartService {
  get ptDescriptionParts(): DescriptionPart[] {
    const ptDescriptionParts: DescriptionPart[] = [
      {
        title: 'Analyse',
        text: `
        <p><strong>"Nur wer weiß, woher er kommt, weiß, wohin er geht."<br />- Theodor Heuss</strong></p>
        <p>Auch im Training ist eine ausführliche Anamnese eine wichtige Voraussetzung, um den Grundstein für Deinen Erfolg zu legen.</p>
        <p>Im Zuge der Anamnese wird detailliert auf verschiedene Aspekte Deines Körpers eingegangen. So stellt sich heraus, an welchen Stellschrauben wir drehen können.</p>
        <p>Fester Bestandteil der Analyse ist ein Screening, um mögliche Schwachstellen Deines Bewegungsapparates auszumachen.</p>
        <p>Die gesamte Analyse hat einen sehr hohen Stellenwert. Nur so kann ein zielgerechtes Trainingsprogramm konzipiert werden, welches Deinen individuellen Voraussetzungen und Bedürfnissen entspricht.</p>
        `,
        image: {
          url: 'assets/static/images/style-images/pumpin-iron-768x457.jpeg',
          alt: '',
          position: 'top'
        }
      },
      {
        title: 'Training',
        text: `
        <p>Hilfe zur Selbsthilfe.</p>
        <p>Dein Erfolg steht an oberster Stelle. Du erzielst im Training keinen Fortschritt mehr oder leidest unter Bewegungseinschränkungen und mangelnder körperlicher Leistungsfähigkeit? Dann lege Dein Training in die Verantwortung professioneller Hände.</p>
        <p>Anhand der ausführlichen Analyse wird Dein individuelles Trainingsprogramm gestaltet. Nicht nur Deine körperlichen Voraussetzungen werden berücksichtigt, sondern auch Dein Alltag. Die Betreuung geht über die Box hinaus. Du erhältst konkrete und realisierbare Handlungspläne für alltägliche Situationen.</p>
        <p>
          Das Programm stützt sich auf die vier Säulen der Gesundheit:<br />
          <ul>
            <li>Bewegung</li>
            <li>Ernährung</li>
            <li>Regeneration / Stressmanagement</li>
            <li>Mindset</li>
          </ul>
        </p>
        <p>Erlebe wieder volle Leistungsfähigkeit in einem perfekt funktionierenden Körper.</p>
        `,
        image: {
          url: 'assets/static/images/style-images/fitness-pyramide-768x512.jpg',
          alt: '',
          position: 'bottom'
        }
      },
      {
        title: '',
        text: `
        <p><strong>Du hast es selbst in der Hand. Entscheide dich jetzt für ein beschwerdefreies und energiereiches Leben.</strong></p>
        <p>Durch den regelmäßigen Besuch unserer Coaches von Seminaren und Fortbildungen bei Experten ihres Gebiets, profitierst Du immer von den neuesten und vielversprechendsten Methoden.</p>
        `,
        image: {
          url: 'assets/static/images/style-images/active-recovery-768x512.jpeg',
          alt: '',
          position: 'center center'
        }
      },
    ];
    return ptDescriptionParts;
  }
}
