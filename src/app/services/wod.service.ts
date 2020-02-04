import { Injectable } from '@angular/core';
import { Wod } from '../models/wod';

@Injectable({
  providedIn: 'root',
})
export class WodService {

  get wodList(): Wod[] {
    const wods: Wod[] = [
      {
        dayOfWeek: 'Montag',
        wod: [
          'A: Back Squat, heavy Set of three',
          '',
          'B: for time',
          '50/35 Cal Row',
          '30 Single Arm DB Hang Clean and Jerk',
          '30 Single DB Goblet Squats',
          '30 Single Arm DB Hang Clean and Jerk',
          '50/35 Cal Row',
        ]
      },
      {
        dayOfWeek: 'Dienstag',
        wod: [
          '5 Rounds of',
          '4min AMRAP',
          '30/20 Cal Row',
          '20 Burpees',
          'AMRAP 10m Shuttle Run',
          '4min Rest between Rounds',
          '',
          'BASICS 6: Squat Snatch, Pull-ups'
        ]
      },
      {
        dayOfWeek: 'Mittwoch',
        wod: [
          '21-15-9',
          'Wallballs',
          'Pull-ups',
          'Thruster',
          'Box Jumps',
          'DB Swings',
          '',
          'WEIGHTLIFTING: Snatch'
        ]
      },
      {
        dayOfWeek: 'Donnerstag',
        wod: [
          '18min E3MOM',
          '24 Sit-ups',
          '16/12 Cal Row',
          '6 Strict Press',
          '',
          'GYMNASTICS: Stange'
        ]
      },
      {
        dayOfWeek: 'Freitag',
        wod: [
          'for time',
          '1500m Row',
          '30 Deadlifts',
          '45 lateral Barbell Burpees'
        ]
      },
      {
        dayOfWeek: 'Samstag',
        wod: [
          'Team WOD',
          'BASICS 7: Strict Press, Push Press, Push Jerk'
        ]
      },
      {
        dayOfWeek: 'Sonntag',
        wod: ['Team WOD']
      }
    ]
    return wods;
  }
}
