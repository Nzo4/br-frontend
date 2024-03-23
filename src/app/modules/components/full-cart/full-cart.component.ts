import { Component, Input } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture.model';


@Component({
  selector: 'app-full-cart',
  templateUrl: './full-cart.component.html',
})
export class FullCartComponent {
  @Input() item !: Furniture;
}
