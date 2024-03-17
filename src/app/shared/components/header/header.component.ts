import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('1s ease-out')),
      transition('hidden => visible', animate('1s ease-in')),
    ]),
  ]
})
export class HeaderComponent {
  buttonSearch$: Observable<boolean>;

  constructor(private headerService: HeaderService) {
    this.buttonSearch$ = this.headerService.buttonSearchState$;
  }

  toggleSearchButton() {
    this.headerService.toggleSearchButtonState();
  }

  toggleCatalogButton() {
    this.headerService.toggleCatalogButtonState();
  }


}
