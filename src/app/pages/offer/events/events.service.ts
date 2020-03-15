import { Injectable } from '@angular/core';
import { Event } from './event';

let events: Event[];

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  get events(): Event[] {
    return events;
  }
}

events = [
  {
    date: '19.01.2020',
    time: '10:00',
    description: 'TeamWOD Fotoshoot',
    image: {
      url: 'assets/images/events/20200628-0802_CFGAMES_KINO.jpg',
      alt: ''
    }
  },
  {
    date: '15.02.2020',
    time: '10:00',
    description: 'STAMMTISCH \„Weißwurst & Brez\’N\“',
    image: {
      url: 'assets/images/events/20200404_2terGeburtstag.jpg',
      alt: ''
    }
  },
  {
    date: '09.03.2020',
    time: '18:00',
    description: 'RuderWorkshop Teil 1',
    image: {
      url: 'assets/images/events/20200328_stammtisch.jpg',
      alt: ''
    }
  },
  {
    date: '16.03.2020',
    time: '18:00',
    description: 'RuderWorkshop Teil 2',
    image: {
      url: 'assets/images/events/20200425_AngeLove Nutrition.jpg',
      alt: ''
    }
  },
  {
    date: '23.03.2020',
    time: '18:00',
    description: 'RuderWorkshop Teil 3',
    image: {
      url: 'assets/images/events/20200404_2terGeburtstag.jpg',
      alt: ''
    }
  },
  {
    date: '28.03.2020',
    time: '10:00',
    description: 'STAMMTISCH „Healthy Food“ + BurpeeChallenge 1000',
    image: {
      url: 'assets/images/events/20200328_stammtisch.jpg',
      alt: ''
    }
  },
  {
    date: '04.04.2020',
    time: '10:00',
    description: 'CROSSFIT AM SEE’s 🎁ZWEITER GEBURTSTAG🥳',
    image: {
      url: 'assets/images/events/20200404_2terGeburtstag.jpg',
      alt: ''
    }
  },
  {
    date: '25.04.2020',
    time: '10:30',
    description: 'Talk with ALN Nutrition Workshop',
    image: {
      url: 'assets/images/events/20200425_AngeLove Nutrition.jpg',
      alt: ''
    }
  },
  {
    date: '16.05.2020',
    time: '10:00',
    description: 'Weightlifting Workshop – Athletik Club Konstanz',
    image: {
      url: 'assets/images/events/20200328_stammtisch.jpg',
      alt: ''
    }
  }
]