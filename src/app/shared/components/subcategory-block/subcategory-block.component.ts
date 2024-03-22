import { Component, Input } from '@angular/core';
import { Subcategory } from 'src/app/core/models/subcategory.model';

@Component({
  selector: 'app-subcategory-block',
  templateUrl: './subcategory-block.component.html',
})
export class SubcategoryBlock {
  @Input() subcategories !: Subcategory[];

  constructor() { }

}
