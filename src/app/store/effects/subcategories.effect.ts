import { Injectable } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { SubcategoryService } from "src/app/core/services/subcategory.service";
import * as SubcategoryActions from "../actions/subcategories.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class SubcategoryEffects {
  getSubcategory$ = createEffect(() => this.actions$.pipe(
    ofType(SubcategoryActions.getSubcategory),
    switchMap((action) => {
      return this.subcategoryService.getAllSubcategories(action.categorySlug)
        .pipe(
          map(subcategories => SubcategoryActions.getSubcategorySuccess({ subcategories })),
          catchError(error => of(SubcategoryActions.getSubcategoryFailure({ error: error.message })))
        );
    })
  ))
  constructor(private actions$: Actions, private subcategoryService: SubcategoryService) { }
} 