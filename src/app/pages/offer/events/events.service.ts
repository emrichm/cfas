import { Injectable } from '@angular/core';
import * as eventDTO from '../../../../assets/dynamic/data/events.json';
import { Event, EventDTO } from './event';

let events = (eventDTO.events as EventDTO[]).map(event => new Event(event));
events = events.filter(event => event.expDate.getTime() >= new Date().getTime());
events = events.sort((a, b) => a.date.getTime() - b.date.getTime());

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  get events(): Event[] {
    return events;
  }
}
