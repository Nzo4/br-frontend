import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BasketCartComponent } from '../../components/basket-cart/basket-cart.component';
import { CheckoutComponent } from '../../components/checkout/checkout.component';


@NgModule({
  declarations: [
    BasketComponent,
    BasketCartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
  ]
})
export class BasketModule { }
