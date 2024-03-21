import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { Subcategory } from 'src/app/core/models/subcategory.model';
import { getCategory } from 'src/app/store/actions/categories.action';
import { getSubcategory } from 'src/app/store/actions/subcategories.actions';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureCategories } from 'src/app/store/selectors/categories.selector';
import { selectFeatureSubcategories } from 'src/app/store/selectors/subcategories.selector';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
})
export class FilterBlockComponent implements OnInit {
  categories$: Observable<Category[]>
  subcategories$: Observable<Subcategory[]>
  currentSlug: string = '';
  checked: boolean = false;


  constructor(private store: Store<AppStateModel>) {
    this.categories$ = this.store.pipe(select(selectFeatureCategories));
    this.subcategories$ = this.store.pipe(select(selectFeatureSubcategories));
  }

  ngOnInit(): void {
    this.store.dispatch(getCategory());
  }

  getSubcategory(categorySlug: string) {
    this.currentSlug = categorySlug
    this.store.dispatch(getSubcategory({ categorySlug }))
    this.checked = !this.checked;
  }

}
