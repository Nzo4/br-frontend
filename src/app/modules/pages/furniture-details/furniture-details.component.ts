import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import * as FurnitureSelectors from '../../../store/selectors/furniture.selector';
import { getOneFurniture } from 'src/app/store/actions/furniture.action';

@Component({
  selector: 'app-furniture-details',
  styleUrls: ['./furniture-details.component.scss'],
  templateUrl: './furniture-details.component.html',
})
export class FurnitureDetailsComponent implements OnInit {
  furnitureOne$: Observable<Furniture>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  slug: string = '';

  constructor(private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.furnitureOne$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurnitureOne));
    this.isLoading$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurnitureOneIsLoading));
    this.error$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurnitureOneError));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.slug = param['slug'];
    })
    this.store.dispatch(getOneFurniture({ furnitureSlug: this.slug }))
  }
}
