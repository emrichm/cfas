import { Event } from 'src/app/pages/offer/events/event/event';
import { EventsService } from 'src/app/pages/offer/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  yearText: string;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.events;
    this.yearText = this.events[0].date.getFullYear() === this.events[this.events.length - 1].date.getFullYear() ?
      `${this.events[0].date.getFullYear()}` :
      `${this.events[0].date.getFullYear().toString().substr(-2)}/`
        .concat(`${this.events[this.events.length - 1].date.getFullYear().toString().substr(-2)}`);
  }

}
