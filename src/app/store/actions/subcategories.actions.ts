import { createAction, props } from "@ngrx/store";
import { Subcategory } from "src/app/core/models/subcategory.model";


export const getSubcategory = createAction('[Subcategories] Get Subcategory', props<{ categorySlug: string }>());
export const getSubcategorySuccess = createAction('[Subcategories] Get Subcategory Success', props<{ subcategories: Subcategory[] }>());
export const getSubcategoryFailure = createAction('[Subcategories] Get Subcategory Failure', props<{ error: string }>());

