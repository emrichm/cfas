import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
  }

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
    }
  }
}
