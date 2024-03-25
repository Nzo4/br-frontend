import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Observable, skip } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { Furniture } from 'src/app/core/models/furniture.model';
import { selectFeatureBasket } from 'src/app/store/selectors/basket.selector';
import { getBasket } from 'src/app/store/actions/basket.action';

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
export class HeaderComponent implements OnInit {
  buttonSearch$: Observable<boolean>;
  basket$: Observable<Furniture[]>
  basketCounter: number = 0;

  constructor(private headerService: HeaderService, private store: Store<AppStateModel>) {
    this.buttonSearch$ = this.headerService.buttonSearchState$;
    this.basket$ = this.store.pipe(select(selectFeatureBasket));

  };

  ngOnInit(): void {
    this.basket$.subscribe((furniture) => {
      this.basketCounter = furniture.length;
    })
    this.store.dispatch(getBasket());
  }

  toggleSearchButton() {
    this.headerService.toggleSearchButtonState();
  }

  toggleCatalogButton() {
    this.headerService.toggleCatalogButtonState();
  }


}
