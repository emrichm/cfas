import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassHoursService {

  getClassHoursForDayOfWeek(dayOfWeek: WeekDay): string[] {
    let classHours: string[] = [];
    switch (dayOfWeek) {
      case WeekDay.Monday:
        classHours = [
          '6:30 - 7:30',
          '17:00 - 18:00',
          '18:00 - 19:00',
          '19:00 - 20:00'
        ];
        break;
      case WeekDay.Tuesday:
        classHours = [
          '18:00 - 19:00',
          '19:00 - 20:00'
        ];
        break;
      case WeekDay.Wednesday:
        classHours = [
          '6:30 - 7:30',
          '17:00 - 18:00',
          '18:00 - 19:00',
          '19:00 - 20:00'
        ];
        break;
      case WeekDay.Thursday:
        classHours = [
          '9:00 - 10:00',
          '17:00 - 18:00',
          '19:00 - 20:00'
        ];
        break;
      case WeekDay.Friday:
        classHours = [
          '6:30 - 7:30',
          '16:00 - 17:00',
          '17:00 - 18:00',
          '18:00 - 19:00'
        ];
        break;
      case WeekDay.Saturday:
        classHours = [
          '10:30 - 12:00'
        ];
        break;
      case WeekDay.Sunday:
        classHours = [];
        break;
    }
    return classHours;
  }
}
