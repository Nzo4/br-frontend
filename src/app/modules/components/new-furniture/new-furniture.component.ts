import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import * as FurnitureSelectors from '../../../store/selectors/furniture.selector';
import { getFurniture } from 'src/app/store/actions/furniture.action';


@Component({
  selector: 'app-new-furniture',
  templateUrl: './new-furniture.component.html',
})
export class NewFurnitureComponent implements OnInit {
  furniture$: Observable<Furniture[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateModel>) {
    this.furniture$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurniture), map(furniture => furniture.slice(-10).reverse()));
    this.isLoading$ = this.store.pipe(select(FurnitureSelectors.selectFeatureIsLoading));
    this.error$ = this.store.pipe(select(FurnitureSelectors.selectFeatureError));
  }

  ngOnInit(): void {
    this.store.dispatch(getFurniture())
  }
}
