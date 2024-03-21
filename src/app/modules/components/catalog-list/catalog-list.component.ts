import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
})
export class CatalogListComponent {
  @Input() categories$ !: Category[];
}
