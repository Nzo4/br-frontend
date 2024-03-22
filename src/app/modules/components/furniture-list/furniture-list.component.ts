import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import * as FurnitureSelectors from '../../../store/selectors/furniture.selector';
import { getSubcategoryFurniture } from 'src/app/store/actions/furniture.action';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
})
export class FurnitureListComponent implements OnInit {
  furniture$: Observable<Furniture[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  pathComponent: any[] = [];

  constructor(private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.furniture$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurniture));
    this.isLoading$ = this.store.pipe(select(FurnitureSelectors.selectFeatureIsLoading));
    this.error$ = this.store.pipe(select(FurnitureSelectors.selectFeatureError));
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.pathComponent = segments.map(segment => segment.path);

      const categorySlug = this.pathComponent[0];
      const subcategorySlug = this.pathComponent[1];

      this.store.dispatch(getSubcategoryFurniture({ categorySlug: categorySlug, subcategorySlug: subcategorySlug }));
    });
  }
}
