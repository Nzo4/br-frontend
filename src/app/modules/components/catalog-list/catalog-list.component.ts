import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureCategories } from 'src/app/store/selectors/categories.selector';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
})
export class CatalogListComponent {
  categories$: Observable<Category[]>
  constructor(private store: Store<AppStateModel>) {
    this.categories$ = this.store.pipe(select(selectFeatureCategories));
  }

}
