import { Injectable } from '@angular/core';

const cookieName = 'crossfitamsee';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  hasCookieValue(cookieValue: string): boolean {
    return this.hasStorageCookieValue(sessionStorage, cookieValue)
      || this.hasStorageCookieValue(localStorage, cookieValue);
  }

  addCookieSession(cookieValue: string) {
    this.addCookie(sessionStorage, cookieValue);
  }

  addCookieLocal(cookieValue: string) {
    this.addCookie(localStorage, cookieValue);
  }

  private hasStorageCookieValue(storage: Storage, cookieValue: string): boolean {
    return storage.getItem(cookieName) ? storage.getItem(cookieName).split(',').includes(cookieValue) : false;
  }

  private addCookie(storage: Storage, cookieValue: string) {
    const cookie: string[] = [];

    if (storage.getItem(cookieName)) {
      storage.getItem(cookieName).split(',').forEach(value => cookie.push(value));
    }

    if (!cookie.includes(cookieValue)) {
      cookie.push(cookieValue);
    }

    storage.setItem(cookieName, cookie.toString());
  }
}
