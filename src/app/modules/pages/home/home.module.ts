import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { furnitureReducers } from 'src/app/store/reducers/furniture.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FurnitureEffects } from 'src/app/store/effects/furniture.effect';
import { SliderComponent } from '../../components/slider/slider.component';
import { PopularCategoryComponent } from '../../components/popular-category/popular-category.component';
import { DiscountsComponent } from '../../components/discounts/discounts.component';
import { NewFurnitureComponent } from '../../components/new-furniture/new-furniture.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartComponent } from '../../components/cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    PopularCategoryComponent,
    DiscountsComponent,
    NewFurnitureComponent,
    PartnersComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forFeature('furniture', furnitureReducers),
    EffectsModule.forFeature([FurnitureEffects])


  ]
})
export class HomeModule { }
