import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { addedItemInBasket } from 'src/app/store/actions/basket.action';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureBasket } from 'src/app/store/selectors/basket.selector';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',

})
export class ButtonComponent {
  @Input() buttonStyle!: string;
  @Input() furniture!: Furniture;
  basket$: Observable<Furniture[]>;

  constructor(private store: Store<AppStateModel>) {
    this.basket$ = this.store.pipe(select(selectFeatureBasket));
  }

  addedItem(furniture: Furniture) {
    this.store.dispatch(addedItemInBasket({ furniture }));
    this.buttonStyle = `${this.buttonStyle}-active`
  }

}
