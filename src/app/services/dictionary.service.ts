import { Injectable } from '@angular/core';
import { DictionaryItem } from '../models/dictionary-item';

let dictionary: DictionaryItem[];

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  get dictionary(): DictionaryItem[] {
    return dictionary;
  }
}

dictionary = [{
  term: 'AirSquat',
  description: 'Kniebeuge ohne zusätzliches Gewicht'
}, {
  term: 'Ass To Grass',
  description: 'So tief wie möglich in die Kniebeuge gehen'
}, {
  term: 'AMRAP',
  description: 'As Many Reps/Rounds As Possible'
}, {
  term: 'Affiliate',
  description: 'CrossFit-Box'
}, {
  term: 'Animals',
  description: 'Übungen zum aufwärmen welche Bewegungen von Tieren imitieren'
}, {
  term: 'American Swings',
  description: 'Kettlebell-Swing bis Überkopf'
}, {
  term: 'Barbell',
  description: 'Langhantel'
}, {
  term: 'Bar Facing Burpee',
  description: 'Burpee mit frontalem Sprung über die Langhantel'
}, {
  term: 'Bear Crawl',
  description: 'Teil des CF ZOO. Eines der Tierbewegungen welche zum warm-up dienen.'
}, {
  term: 'Back Squat',
  description: 'Kniebeuge mit Gewicht auf dem oberen Rücken.'
}, {
  term: 'Box',
  description: 'Ort an welchem CrossFitter trainieren.'
}, {
  term: 'Burpee Box Jump',
  description: 'Übung bei welcher man erst einen Burpee macht und dann auf eine Box springt.'
}, {
  term: 'Benchmark',
  description: 'Standardisierte WODs welche immer mal wiederholt werden um seinen Leistungsfortschritt dokumentieren zu können.'
}, {
  term: 'Bench Press',
  description: 'Bankdrücken'
}, {
  term: 'Burpee Lateral',
  description: 'Burpee seitlich über Langhantel gesprungen.'
}, {
  term: 'Butterfly Pull-Up',
  description: 'Klimmzug Variante für fortgeschrittene Athleten.'
}, {
  term: 'BumperPlate',
  description: 'Hantelscheiben'
}, {
  term: 'Box Jump',
  description: 'Übung bei welcher man aus dem Stand mit beiden Beinen auf eine Box springt'
}, {
  term: 'Burpee',
  description: 'Liegestütz gefolgt von einem Hock-Strecksprung'
}, {
  term: 'C&J',
  description: `Clean & Jerk. Umsetzen und Stoßen. Bewegung aus dem Olympischen Gewichtheben. 
  Hier wird erst das Gewicht von Boden auf die Schultern gehoben und danach über Kopf gedrückt.`
}, {
  term: 'Chalk',
  description: 'Kreide/Magnesiumcarbonat. Nahrungsmittel für unsere Kreidemonster, zur Griffstärkung und Trocknung der Handinnenflächen'
}, {
  term: 'Chipper',
  description: 'Ein Workout mit mehr als drei Movements'
}, {
  term: 'Coach',
  description: 'Dein Trainer'
}, {
  term: 'C2B',
  description: 'Chest to Bar Pull-Up. Klimmzug mit der Brust an die Stange'
}, {
  term: 'Chin-Up',
  description: 'Klimmzug im Supinationsgriff. Handflächen zeigen zu einem selbst.'
}, {
  term: 'Clean',
  description: 'Umsetzen.'
}, {
  term: 'CrossFit Games',
  description: 'Weltmeisterschaft im CrossFit an welchem jeder Athlet teilnehmen kann.'
}, {
  term: 'Double Unders',
  description: 'Eine Art des Seilspringens. Während einen Sprung, schlägt das seil doppelt unter den Füßen durch.'
}, {
  term: 'Deadlift',
  description: 'Kreuzwehen. Eine der drei Übungen aus dem Powerlifting.'
}, {
  term: 'Death By',
  description: `Man startet mit einer bestimmten Anzahl an Wiederholungen und fügt jede beginnende 
  Minute eine oder mehrere Wiederholungen hinzu`
}, {
  term: 'Dip',
  description: 'Man drückt sich an einer Stange oder in Ringen oder Boxen nach oben und lässt sich wieder runter. '
}, {
  term: 'Dumbbell',
  description: 'Kurzhantel.'
}, {
  term: 'Dave Castro',
  description: 'Organisator der CF Games'
}, {
  term: 'Double Anders',
  description: 'Eine Art des Seilspringens. Während einen Sprung, schlägt das seil doppelt unter den Füßen durch.'
}, {
  term: 'Front Squat',
  description: 'Kniebeuge mit Gewicht auf den Schultern in der Front Rack Position.'
}, {
  term: 'Farmers Carry',
  description: 'Ein „Spaziergang“ mit zwei Gewichten in den Händen'
}, {
  term: 'Fran',
  description: '21 – 15 – 9',
  description1: 'Pull-Ups & Thruster'
}, {
  term: 'For Time',
  description: 'Format eines WODs. Eine Abfolge an Bewegungen so schnell wie möglich beenden. '
}, {
  term: 'Greg Glassmann',
  description: 'Gründer/Erfinder von CrossFit'
}, {
  term: 'Ground To Overhead',
  description: 'Ein Gewicht vom Boden über Kopf bringen.'
}, {
  term: 'Gymnastics',
  description: 'Turnerische Übungen'
}, {
  term: 'HSPU',
  description: 'Handstand Liegestütze'
}, {
  term: 'Hang Snatch',
  description: 'Ein Snatch welcher von der Bewegung erst über dem Knie gestartet wird.'
}, {
  term: 'Hero WOD',
  description: 'Workout Of the Day, welche im andenken an im Krieg gefallene Soldaten kreiert wurden.'
}, {
  term: 'Handstand Walk',
  description: 'Auf den Händen laufen.'
}, {
  term: 'Hook Grip',
  description: 'Daumenklemme. Grifftechnik der Langhantel.'
}, {
  term: 'KettleBell',
  description: 'Kugelhantel'
}, {
  term: 'Knee Raise',
  description: 'An der Stange hängend werden die Knie so weit wie möglich angezogen.'
}, {
  term: 'K2E',
  description: 'Gymnastische Bewegung in welcher man, an der Stange hängend die Knie zu den Ellenbogen bringt.'
}, {
  term: 'MetCon',
  description: 'Metabolic Conditioning'
}, {
  term: 'Muscle Up',
  description: 'Kombination aus Pull-Up und Dip'
}, {
  term: 'L-Sit',
  description: 'Gymnastische Übung bei welcher mal man die Beine ausgestreckt im rechten Winkel zum Oberkörper hält.'
}, {
  term: 'Lunges',
  description: 'Ausfallschritte'
}, {
  term: 'MedBall Clean',
  description: 'Ein Clean mit dem Medizinball'
}, {
  term: 'No Rep',
  description: 'Eine Wiederholung die nicht zählt weil der Bewegungsstandard nicht eingehalten wurde.'
}, {
  term: 'Olympic Lifts',
  description: 'Umsetzen und Stoßen (Clean & Jerk) und Reißen (Snatch)'
}, {
  term: 'Overhead Squats',
  description: 'Überkopf Kniebeuge'
}, {
  term: 'Power Clean',
  description: 'Ein Clean startend von Boden, Endet mit der Hüfte oberhalb vom Knie.'
}, {
  term: 'Power Snatch',
  description: 'Ein Snatch startend von Boden, Endet mit der Hüfte oberhalb vom Knie'
}, {
  term: 'PR',
  description: 'Persönlicher Rekord.'
}, {
  term: 'Pistols',
  description: 'Einbeinige Kniebeuge'
}, {
  term: 'Press',
  description: 'Gewicht wird Überkopf gedrückt ohne Einsatz der Beine.'
}, {
  term: 'Progression',
  description: '„Entwicklungsschritte“ der einzelnen Movements um sie in Teile aufbrechen und schulen zu können.'
}, {
  term: 'Pull-Up',
  description: 'Klimmzug'
}, {
  term: 'Push Jerk',
  description: 'Standstoßen'
}, {
  term: 'Push Up',
  description: 'Liegestütz'
}, {
  term: 'Rack/Rig',
  description: 'Metallkonstruktion für Klimmzüge etc. '
}, {
  term: 'Range Of Motion',
  description: 'Bewegungsumfang der Gelenke'
}, {
  term: 'Repitition (Rep)',
  description: 'Wiederholung'
}, {
  term: 'Ring Row',
  description: `Skalierung für Klimmzüge. Man hält sich an den Ringen fest und lehnt sich nach hinten, 
  dann zieht man sich hoch bis die Brust die Ringe berührt.`
}, {
  term: 'Rope Climb',
  description: 'Seil klettern'
}, {
  term: 'Rounds For Time',
  description: 'WOD variation in welcher man eine bestimmte Rundenanzahl auf Zeit absolvieren soll.'
}, {
  term: 'Row',
  description: 'Rudern'
}, {
  term: 'Rx\'d',
  description: 'As prescribed. Wie beschrieben. Heißt man hat das WOD gemacht wie es vom Gewicht her definiert wurde.'
}, {
  term: 'Skill',
  description: 'Fertigkeit'
}, {
  term: 'Sore',
  description: 'Muskelkater'
}, {
  term: 'Split Jerk',
  description: 'Stoßen mit Ausfallschritt.'
}, {
  term: 'Spotter',
  description: 'Helfer im Bankdrücken'
}, {
  term: 'Strict',
  description: 'Eine Übung wird ohne Schwung ausgeführt'
}, {
  term: 'Tabata',
  description: 'Zeitintervall: 8 Runden, 20 Sekunden Arbeit, 10 Sekunden Pause'
}, {
  term: 'Thruster',
  description: 'Ein Movementkomplex aus Front Squat und Push Press.'
}, {
  term: 'Tire Flip',
  description: 'Reifenschubsen'
}, {
  term: 'TGU',
  description: 'Turkish Get Up. Bewegung mit einer KettleBell ausgehend vom liegen aus den Boden bis in die stehende Überkopf Position.'
}, {
  term: 'Toes To Bar',
  description: 'Übung an der Stange hängend. Füße müssen die Stange zwischen den Händen berühren.'
}, {
  term: 'Toes To Rings',
  description: 'Wie T2B nur an den Ringen.'
}, {
  term: 'Unbroken',
  description: 'Bestimmte Anzahl eines Movements ohne Unterbrechung bewältigen.'
}, {
  term: 'Walking Lunges',
  description: 'Eine bestimmte Strecke wird mit Ausfallschritten zurück gelegt.'
}, {
  term: 'Whiteboard',
  description: 'Tafel. Hier wird das WOD-angeschrieben und erklärt.'
}, {
  term: 'WOD',
  description: 'Workout of the Day'
}, {
  term: 'Walking Lunges',
  description: 'Eine bestimmte Strecke wird mit Ausfallschritten zurück gelegt.'
}];