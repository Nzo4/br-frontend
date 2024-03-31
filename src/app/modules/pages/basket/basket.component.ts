import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';
import { deletedItemFromBasket } from 'src/app/store/actions/basket.action';
import { AppStateModel } from 'src/app/store/models/app-state.model';
import { selectFeatureBasket } from 'src/app/store/selectors/basket.selector';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<Furniture[]>;
  totalPrice: number = 0;
  countItem: number = 0;
  isCheckout: boolean = false;


  constructor(private store: Store<AppStateModel>) {
    this.basket$ = this.store.pipe(select(selectFeatureBasket));
  }

  ngOnInit(): void {
    this.calculateTotalPriceAndItemCount();
  };


  calculateTotalPriceAndItemCount(): void {
    this.basket$.subscribe(
      (value) => {
        this.totalPrice = value.reduce((acc, item) => acc + item.price, 0);
        this.countItem = value.length;
      }
    );
  }


  getTotalPrice(value: number, item: Furniture) {
    if (value > 0) {
      this.totalPrice += item.price * value;
    } else {
      this.totalPrice -= item.price;
    }
  };

  deleteItem(itemName: string) {
    this.store.dispatch(deletedItemFromBasket(({ furnitureName: itemName })));
    this.calculateTotalPriceAndItemCount();
  }

}
