import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBlockComponent } from '../../components/filter-block/filter-block.component';
import { FurnitureListComponent } from '../../components/furniture-list/furniture-list.component';
import { CatalogOverviewComponent } from '../catalog-overview/catalog-overview.component';
import { CatalogListComponent } from '../../components/catalog-list/catalog-list.component';
import { ShortCartComponent } from '../../components/short-cart/short-cart.component';
import { FurnitureDetailsComponent } from '../furniture-details/furniture-details.component';
import { FullCartComponent } from '../../components/full-cart/full-cart.component';
import { StoreModule } from '@ngrx/store';
import { furnitureOneReducers } from 'src/app/store/reducers/furniture.reducer';
import { FurnitureSidebarComponent } from '../../components/furniture-sidebar/furniture-sidebar.component';


@NgModule({
  declarations: [
    CatalogComponent,
    FilterBlockComponent,
    FurnitureListComponent,
    CatalogOverviewComponent,
    CatalogListComponent,
    ShortCartComponent,
    FurnitureDetailsComponent,
    FullCartComponent,
    FurnitureSidebarComponent,
  ],

  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    StoreModule.forFeature('furnitureOne', furnitureOneReducers),
  ]
})
export class CatalogModule { }
