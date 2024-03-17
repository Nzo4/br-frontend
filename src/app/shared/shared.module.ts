import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { CatalogInfoComponent } from './components/catalog-info/catalog-info.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CatalogComponent,
    OverlayComponent,
    CatalogInfoComponent
  ],
  exports: [
    HeaderComponent,
    CatalogComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
