import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureCategories } from 'src/app/store/selectors/categories.selector';

@Component({
  selector: 'app-filter-block',
  styleUrls: ['./filter-block.component.scss'],
  templateUrl: './filter-block.component.html',
})
export class FilterBlockComponent {
  categories$: Observable<Category[]>
  accordionState: boolean[] = [];

  constructor(private store: Store<AppStateModel>) {
    this.categories$ = this.store.pipe(select(selectFeatureCategories));
  }

  toggleAccordion(index: number) {
    this.accordionState[index] = !this.accordionState[index];
  }





}
