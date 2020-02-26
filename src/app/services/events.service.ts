import { Injectable } from '@angular/core';
import { EventMonth } from '../models/event';

let eventMonths: EventMonth[];

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  get events() {
    return eventMonths;
  }
}

eventMonths = [
  {
    month: 'Januar',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: [
      {
        date: '19.01.2020',
        time: '10:00',
        description: 'TeamWOD Fotoshoot'
      }
    ]
  },
  {
    month: 'Februar',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: [
      {
        date: '15.02.2020',
        time: '10:00',
        description: 'STAMMTISCH \„Weißwurst & Brez\’N\“'
      }
    ]
  },
  {
    month: 'März',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: [
      {
        date: '09.03.2020',
        time: '18:00',
        description: 'RuderWorkshop Teil 1'
      },
      {
        date: '16.03.2020',
        time: '18:00',
        description: 'RuderWorkshop Teil 2'
      },
      {
        date: '23.03.2020',
        time: '18:00',
        description: 'RuderWorkshop Teil 3'
      },
      {
        date: '28.03.2020',
        time: '10:00',
        description: 'STAMMTISCH „Healthy Food“ + BurpeeChallenge 1000'
      }
    ]
  },
  {
    month: 'April',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: [
      {
        date: '04.04.2020',
        time: '10:00',
        description: 'CROSSFIT AM SEE’s 🎁ZWEITER GEBURTSTAG🥳'
      },
      {
        date: '25.04.2020',
        time: '10:30',
        description: 'Talk with ALN Nutrition Workshop'
      }
    ]
  },
  {
    month: 'Mai',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: [
      {
        date: '16.05.2020',
        time: '10:00',
        description: 'Weightlifting Workshop – Athletik Club Konstanz'
      }
    ]
  },
  {
    month: 'Juni',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'Juli',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'August',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'September',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'Oktober',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'November',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  },
  {
    month: 'Dezember',
    image: {
      url: 'assets/images/halle1/IMG_0927-480.jpeg',
      alt: ''
    },
    events: []
  }
]