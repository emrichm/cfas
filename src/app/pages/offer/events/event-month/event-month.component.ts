import { EventMonth } from 'src/app/models/event';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-event-month',
  templateUrl: './event-month.component.html',
  styleUrls: ['./event-month.component.scss']
})
export class EventMonthComponent {
  @Input() eventMonth: EventMonth;
}
