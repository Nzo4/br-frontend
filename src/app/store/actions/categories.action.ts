import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/core/models/category.model";


export const getCategory = createAction('[Categories] Get Category');
export const getCategorySuccess = createAction('[Categories] Get Category Success', props<{ categories: Category[] }>());
export const getCategoryFailure = createAction('[Categories] Get Category Failure', props<{ error: string }>())