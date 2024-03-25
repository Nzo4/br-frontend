import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CategoryBlock } from './components/category-block/category-block.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SubcategoryBlock } from './components/subcategory-block/subcategory-block.component';
import { TransformKeyPipe } from './pipes/transform-key.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { basketReducers } from '../store/reducers/basket.reducer';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CategoryBlock,
    OverlayComponent,
    SubcategoryBlock,
    TransformKeyPipe,
    PaginationComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    CategoryBlock,
    OverlayComponent,
    TransformKeyPipe,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('basket', basketReducers),
  ]
})
export class SharedModule { }
