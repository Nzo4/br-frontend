import { Component, Input } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture.model';

@Component({
  selector: 'app-short-cart',
  templateUrl: './short-cart.component.html',
})
export class ShortCartComponent {
  @Input() item !: Furniture;
}
