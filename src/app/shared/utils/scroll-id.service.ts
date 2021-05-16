import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToRouteFragment(route: ActivatedRoute) {
    route.fragment.subscribe(this.scrollToId);
  }

  scrollToId(selectorId: string): void {
    const element = document.querySelector<HTMLInputElement>(`#${selectorId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
