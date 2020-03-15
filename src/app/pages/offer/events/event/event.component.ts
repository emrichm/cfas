import { Event } from 'src/app/pages/offer/events/event';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() event: Event;
}
