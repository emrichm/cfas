import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from '../shared/services/cookie.service';

type WindowXY = [number, number];
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'router-outlet'
})
export class RouterOutletDirective implements OnInit, OnDestroy {
  private unsubscribeAll = new Subject();
  private currentXY: WindowXY;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.elementRef = elementRef;
    this.router = router;
  }

  public ngOnInit(): void {
    this.currentXY = this.windowCoordinates;
    this.router.events.pipe(
      takeUntil(this.unsubscribeAll),
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
    this.unsubscribeAll.next();
    this.windowCoordinates = this.currentXY;
  }

  private get windowCoordinates(): WindowXY {
    return [window.scrollX, window.scrollY] as WindowXY;
  }

  private set windowCoordinates(xy: WindowXY) {
    window.scrollTo(xy[0] || 0, xy[1] || 0);
  }
}