import { createAction, props } from "@ngrx/store";
import { Furniture } from "src/app/core/models/furniture.model";



export const getFurniture = createAction('[Furniture] Get Furniture');
export const getFurnitureSuccess = createAction('[Furniture] Get Furniture success', props<{ furniture: Furniture[] }>());
export const getFurnitureFailure = createAction('[Furniture] Get Furniture failure', props<{ error: string | null }>())

export const getSubcategoryFurniture = createAction('[Furniture] Get Subcategory Furniture', props<{ categorySlug: string, subcategorySlug: string }>());
export const getSubcategoryFurnitureSuccess = createAction('[Furniture] Get Subcategory Furniture success', props<{ furniture: Furniture[] }>());
export const getSubcategoryFurnitureFailure = createAction('[Furniture] Get Subcategory Furniture failure', props<{ error: string | null }>())

export const getOneFurniture = createAction('[Furniture] Get One Furniture', props<{ furnitureSlug: string }>());
export const getOneFurnitureSuccess = createAction('[Furniture] Get One Furniture success', props<{ furniture: Furniture }>());
export const getOneFurnitureFailure = createAction('[Furniture] Get One Furniture failure', props<{ error: string | null }>());
