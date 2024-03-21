import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogOverviewComponent } from '../catalog-overview/catalog-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: ':category',
    component: CatalogOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
