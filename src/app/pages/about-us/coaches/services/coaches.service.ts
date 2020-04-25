import { Injectable } from '@angular/core';
import * as coachesDTO from '../../../../../assets/dynamic/data/coaches.json';
import { Coach } from '../models/coach';
import { CoachInterview } from '../models/coach-interview';
import { CoachTeaser } from '../models/coach-teaser';

const coaches: Coach[] = coachesDTO.coaches;

@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  get coachesTeaser(): CoachTeaser[] {
    return this.coaches.map((coach: Coach) => new CoachTeaser(coach));
  }

  getCoachInterview(name: string): CoachInterview {
    const coach: Coach = this.coaches.find((_coach: Coach) =>
      _coach.name.toLowerCase() === name.toLowerCase()
    );
    return new CoachInterview(coach);
  }

  get coaches(): Coach[] {
    return coaches;
  }
}
