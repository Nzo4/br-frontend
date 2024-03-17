import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CategoryService } from "src/app/core/services/category.service";
import * as CategoriesActions from '../actions/categories.action';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CategoryEffect {
  getCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoriesActions.getCategory),
    switchMap(() => this.categoryService.getAllCategory()
      .pipe(
        map(categories => CategoriesActions.getCategorySuccess({ categories })),
        catchError(error => of(CategoriesActions.getCategoryFailure({ error: error.message })))
      )
    )
  ))
  constructor(private actions$: Actions, private categoryService: CategoryService) { }
}