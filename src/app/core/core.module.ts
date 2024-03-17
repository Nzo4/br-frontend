import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureService } from './services/furniture.service';
import { CategoryService } from './services/category.service';
import { SubcategoryService } from './services/subcategory.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CategoryService, SubcategoryService, FurnitureService]
})
export class CoreModule { }
