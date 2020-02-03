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
        name: 'Unsere Box',
        path: null,
        subMenuItems: [
          {
            name: 'Philosophy',
            path: '/philosophy'
          },
          {
            name: 'Coaches',
            path: null
          },
          {
            name: 'Halle 1',
            path: null
          },
          {
            name: 'Werkstatt',
            path: null
          }
        ]
      },
      {
        name: 'Angebot',
        path: null,
        subMenuItems: [
          {
            name: 'Kursplan',
            path: null
          },
          {
            name: 'Preise',
            path: null
          },
          {
            name: 'Kurse',
            path: null
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
