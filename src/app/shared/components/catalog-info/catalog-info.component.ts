import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from 'src/app/core/models/subcategory.model';

@Component({
  selector: 'app-catalog-info',
  templateUrl: './catalog-info.component.html',
})
export class CatalogInfoComponent {
  @Input() subcategories$ !: Observable<Subcategory[]>;

  constructor() { }

}
