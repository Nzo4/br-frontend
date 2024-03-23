import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CategoryBlock } from './components/category-block/category-block.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SubcategoryBlock } from './components/subcategory-block/subcategory-block.component';
import { TransformKeyPipe } from './pipes/transform-key.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    CategoryBlock,
    OverlayComponent,
    SubcategoryBlock,
    TransformKeyPipe
  ],
  exports: [
    HeaderComponent,
    CategoryBlock,
    OverlayComponent,
    TransformKeyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
