import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../../services/header.service';
import { Store, select } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { Category } from 'src/app/core/models/category.model';
import * as CategorySelectors from '../../../store/selectors/categories.selector';
import * as SubcategorySelectors from '../../../store/selectors/subcategories.selector';
import { getCategory } from 'src/app/store/actions/categories.action';
import { Subcategory } from 'src/app/core/models/subcategory.model';
import { getSubcategory } from 'src/app/store/actions/subcategories.actions';


@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.component.html',
})
export class CategoryBlock implements OnInit {
  buttonCatalog$: Observable<boolean>;
  categories$: Observable<Category[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  subcategory$: Observable<Subcategory[]>;
  subcategoryIsLoading: Observable<boolean>;
  subcategoryError: Observable<string | null>;

  constructor(private headerService: HeaderService, private store: Store<AppStateModel>) {
    this.buttonCatalog$ = this.headerService.buttonCatalogState$;
    this.categories$ = this.store.pipe(select(CategorySelectors.selectFeatureCategories));
    this.isLoading$ = this.store.pipe(select(CategorySelectors.selectFeatureIsLoading));
    this.error$ = this.store.pipe(select(CategorySelectors.selectFeatureError));

    this.subcategory$ = this.store.pipe(select(SubcategorySelectors.selectFeatureSubcategories));
    this.subcategoryIsLoading = this.store.pipe(select(SubcategorySelectors.selectFeatureIsLoading));
    this.subcategoryError = this.store.pipe(select(SubcategorySelectors.selectFeatureError));
  }

  ngOnInit(): void {
    this.store.dispatch(getCategory());
  }

  getSubcategory(categorySlug: string) {
    this.store.dispatch(getSubcategory({ categorySlug }))
  }

}
