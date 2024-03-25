import { Component, Input } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() item!: Furniture;
}
