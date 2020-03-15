import { Event } from 'src/app/pages/offer/events/event';
import { EventsService } from 'src/app/pages/offer/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.events;
  }

}
