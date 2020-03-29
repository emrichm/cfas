import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'germanWeekDay'
})
export class GermanWeekDayPipe implements PipeTransform {

  transform(dayOfWeek: number): string {
    let germanWeekDay: string;

    switch (dayOfWeek) {
      case 0:
        germanWeekDay = 'Montag';
        break;
      case 1:
        germanWeekDay = 'Dienstag';
        break;
      case 2:
        germanWeekDay = 'Mittwoch';
        break;
      case 3:
        germanWeekDay = 'Donnerstag';
        break;
      case 4:
        germanWeekDay = 'Freitag';
        break;
      case 5:
        germanWeekDay = 'Samstag';
        break;
      case 6:
        germanWeekDay = 'Sonntag';
        break;
    }

    return germanWeekDay;
  }

}
