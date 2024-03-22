import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private buttonSearchStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private buttonCatalogStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public buttonSearchState$: Observable<boolean> = this.buttonSearchStateSubject.asObservable();
  public buttonCatalogState$: Observable<boolean> = this.buttonCatalogStateSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.buttonCatalogStateSubject.next(false);
      }
    });
  }

  toggleSearchButtonState() {
    const currentState = this.buttonSearchStateSubject.value;
    this.buttonSearchStateSubject.next(!currentState);
  }

  toggleCatalogButtonState() {
    const currentState = this.buttonCatalogStateSubject.value;
    this.buttonCatalogStateSubject.next(!currentState);
  }



}
