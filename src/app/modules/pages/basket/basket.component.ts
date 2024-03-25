import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureBasket } from 'src/app/store/selectors/basket.selector';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  basket$: Observable<Furniture[]>;

  constructor(private store: Store<AppStateModel>) {
    this.basket$ = this.store.pipe(select(selectFeatureBasket));
  }
}
