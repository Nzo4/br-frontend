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
  ))

  constructor(private actions$: Actions, private furnitureService: FurnitureService) { }
}