import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, skip, Subscription, switchAll } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import * as FurnitureSelectors from '../../../store/selectors/furniture.selector';
import { getSubcategoryFurniture } from 'src/app/store/actions/furniture.action';

@Component({
  selector: 'app-catalog-overview',
  templateUrl: './catalog-overview.component.html',
})
export class CatalogOverviewComponent implements OnDestroy {
  private furnitureLengthSubscription!: Subscription;
  furniture$: Observable<Furniture[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  pathComponent: string[] = [];
  furnitureLength: number = 0;

  constructor(private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.furniture$ = this.store.pipe(select(FurnitureSelectors.selectFeatureFurniture));
    this.isLoading$ = this.store.pipe(select(FurnitureSelectors.selectFeatureIsLoading));
    this.error$ = this.store.pipe(select(FurnitureSelectors.selectFeatureError));
  };

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.pathComponent = segments.map(segment => segment.path);
      const categorySlug = this.pathComponent[0];
      const subcategorySlug = this.pathComponent[1];
      this.store.dispatch(getSubcategoryFurniture({ categorySlug: categorySlug, subcategorySlug: subcategorySlug }));
    });

    this.furnitureLengthSubscription = this.furniture$.pipe(
      skip(1)
    ).subscribe((furniture) => {
      this.furnitureLength = furniture.length;
    });
  }

  ngOnDestroy(): void {
    if (this.furnitureLengthSubscription) {
      this.furnitureLengthSubscription.unsubscribe();
    }
  }
}
