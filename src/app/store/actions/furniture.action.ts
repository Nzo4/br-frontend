import { createAction, props } from "@ngrx/store";
import { Furniture } from "src/app/core/models/furniture.model";



export const getFurniture = createAction('[Furniture] Get Furniture');
export const getFurnitureSuccess = createAction('[Furniture] Get Furniture success', props<{ furniture: Furniture[] }>());
export const getFurnitureFailure = createAction('[Furniture] Get Furniture failure', props<{ error: string | null }>())