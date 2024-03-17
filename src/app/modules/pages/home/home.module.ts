import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainModule } from '../../main.module';
import { CoreModule } from 'src/app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { furnitureReducers } from 'src/app/store/reducers/furniture.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FurnitureEffects } from 'src/app/store/effects/furniture.effect';
import { categoryReducers } from 'src/app/store/reducers/categories.reducer';
import { CategoryEffect } from 'src/app/store/effects/categories.effect';
import { subcategoryReducers } from 'src/app/store/reducers/subcategories.reducer';
import { SubcategoryEffects } from 'src/app/store/effects/subcategories.effect';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MainModule,
    CoreModule,
    StoreModule.forFeature('furniture', furnitureReducers),
    StoreModule.forFeature('categories', categoryReducers),
    StoreModule.forFeature('subcategories', subcategoryReducers),
    EffectsModule.forFeature([FurnitureEffects, CategoryEffect, SubcategoryEffects])

  ]
})
export class HomeModule { }
