import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture.model';

@Component({
  selector: 'app-basket-cart',
  templateUrl: './basket-cart.component.html',
  styleUrls: ['./basket-cart.component.scss']
})
export class BasketCartComponent {
  @Input() item !: Furniture;
  @Output() getCount = new EventEmitter<number>();
  @Output() deletedItem = new EventEmitter<boolean>();
  counter: number = 1;

  increment(value: number) {
    this.counter += 1;
    this.getCount.emit(value);
  };

  dicrement(value: number) {
    if (this.counter !== 1) {
      this.counter -= 1;
      this.getCount.emit(value)
    }
  };

  deleteItem() {
    this.deletedItem.emit()
  }


}
