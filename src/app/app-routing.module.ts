import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'catalog', loadChildren: () => import('./modules/pages/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'basket', loadChildren: () => import('./modules/pages/basket/basket.module').then(m => m.BasketModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
