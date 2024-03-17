import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { PopularCategoryComponent } from './components/popular-category/popular-category.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { NewFurnitureComponent } from './components/new-furniture/new-furniture.component';
import { CartComponent } from './components/cart/cart.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    SliderComponent,
    PopularCategoryComponent,
    DiscountsComponent,
    NewFurnitureComponent,
    CartComponent,
    PartnersComponent,
    FooterComponent
  ],
  exports: [
    SliderComponent,
    PopularCategoryComponent,
    DiscountsComponent,
    NewFurnitureComponent,
    CartComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
