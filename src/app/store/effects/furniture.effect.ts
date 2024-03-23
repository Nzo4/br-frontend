import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FurnitureService } from "src/app/core/services/furniture.service";
import * as FurnitureActions from "../actions/furniture.action";
import { catchError, switchMap, map, of } from "rxjs";

@Injectable()
export class FurnitureEffects {
  getFuniture$ = createEffect(() => this.actions$.pipe(
    ofType(FurnitureActions.getFurniture),
    switchMap(() => this.furnitureService.getAllFurniture()
      .pipe(
        map(furniture => FurnitureActions.getFurnitureSuccess({ furniture })),
        catchError((error) => of(FurnitureActions.getFurnitureFailure({ error: error.message })))
      )
    )
  ));

  getOneCategoryFurniture$ = createEffect(() => this.actions$.pipe(
    ofType(FurnitureActions.getSubcategoryFurniture),
    switchMap((action) => this.furnitureService.getAllFurnitureFromSubcategory(action.categorySlug, action.subcategorySlug)
      .pipe(
        map(furniture => FurnitureActions.getSubcategoryFurnitureSuccess({ furniture })),
        catchError((error) => of(FurnitureActions.getSubcategoryFurnitureFailure({ error: error.message })))
      )
    )
  ));

  getOneFurniture$ = createEffect(() => this.actions$.pipe(
    ofType(FurnitureActions.getOneFurniture),
    switchMap((action) => this.furnitureService.getOneFurniture(action.furnitureSlug)
      .pipe(
        map(furniture => FurnitureActions.getOneFurnitureSuccess({ furniture })),
        catchError(error => of(FurnitureActions.getOneFurnitureFailure({ error })))
      )
    )
  ));

  constructor(private actions$: Actions, private furnitureService: FurnitureService) { }
}

