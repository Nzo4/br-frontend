import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { categoryReducers } from './store/reducers/categories.reducer';
import { subcategoryReducers } from './store/reducers/subcategories.reducer';
import { CategoryEffects } from './store/effects/categories.effect';
import { SubcategoryEffects } from './store/effects/subcategories.effect';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('categories', categoryReducers),
    StoreModule.forFeature('subcategories', subcategoryReducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([CategoryEffects, SubcategoryEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
