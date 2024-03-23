import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogOverviewComponent } from '../catalog-overview/catalog-overview.component';
import { FurnitureDetailsComponent } from '../furniture-details/furniture-details.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: ':category',
    component: CatalogOverviewComponent
  },
  {
    path: ':category/:subcategory',
    component: CatalogOverviewComponent
  },
  {
    path: ':category/:subcategory/:furniture',
    component: FurnitureDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
