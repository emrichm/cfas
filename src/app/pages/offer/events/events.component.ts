import { EventMonth } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventMonths: EventMonth[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventMonths = this.eventsService.events;
  }

}
