import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBlockComponent } from '../../components/filter-block/filter-block.component';
import { FurnitureListComponent } from '../../components/furniture-list/furniture-list.component';
import { CatalogOverviewComponent } from '../catalog-overview/catalog-overview.component';
import { CatalogListComponent } from '../../components/catalog-list/catalog-list.component';


@NgModule({
  declarations: [
    CatalogComponent,
    FilterBlockComponent,
    FurnitureListComponent,
    CatalogOverviewComponent,
    CatalogListComponent
  ],

  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
  ]
})
export class CatalogModule { }
