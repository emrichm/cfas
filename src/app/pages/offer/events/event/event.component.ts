import { Event } from 'src/app/pages/offer/events/event/event';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cfas-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventComponent {
  @Input() event: Event;
}
