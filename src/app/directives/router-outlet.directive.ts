import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

type WindowXY = [number, number];
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'router-outlet'
})
export class RouterOutletDirective implements OnInit, OnDestroy {
  private routerEventsSubscription: Subscription;
  private currentXY: WindowXY;

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.elementRef = elementRef;
    this.router = router;
    this.routerEventsSubscription = null;
  }

  public ngOnInit(): void {

    this.currentXY = this.windowCoordinates;
    this.routerEventsSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged((prev: NavigationEnd, next: NavigationEnd) => next && next.url === prev.url)
    )
      .subscribe(
        () => {
          const node = this.elementRef.nativeElement.parentNode;
          node.scrollTop = 0;
        }
      );
  }

  public ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    this.windowCoordinates = this.currentXY;
  }

  private get windowCoordinates(): WindowXY {
    return [window.scrollX, window.scrollY] as WindowXY;
  }

  private set windowCoordinates(xy: WindowXY) {
    window.scrollTo(xy[0] || 0, xy[1] || 0);
  }
}