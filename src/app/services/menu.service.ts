import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  get menu(): MenuItem[] {
    const menu: MenuItem[] = [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Newcomer!',
        path: null,
        subMenuItems: [
          {
            name: 'Das ist CrossFit!',
            path: '/our-box/philosophy'
          },
          {
            name: 'Dein Einstieg',
            path: '/our-box/coaches'
          },
          {
            name: 'CrossFit Dictionary',
            path: '/our-box/halle1'
          }
        ]
      },
      {
        name: 'Unsere Box',
        path: null,
        subMenuItems: [
          {
            name: 'Philosophie',
            path: '/our-box/philosophy'
          },
          {
            name: 'Coaches',
            path: '/our-box/coaches'
          },
          {
            name: 'Halle 1',
            path: '/our-box/halle1'
          },
          {
            name: 'Werkstatt',
            path: '/our-box/werkstatt'
          },
          {
            name: 'Eindrücke',
            path: '/our-box/impressions'
          }
        ]
      },
      {
        name: 'Angebot',
        path: null,
        subMenuItems: [
          {
            name: 'Events',
            path: '/offer/events'
          },
          {
            name: 'Kursplan',
            path: '/offer/schedule'
          },
          {
            name: 'Kurse',
            path: '/offer/classes'
          },
          {
            name: 'Preise',
            path: '/offer/prices'
          }
        ]
      },
      {
        name: 'Kontakt',
        path: '/contact'
      }
    ]
    return menu;
  }
}
