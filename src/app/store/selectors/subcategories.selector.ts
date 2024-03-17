import { createSelector } from "@ngrx/store";
import { AppStateModel } from "../models/app-state.model";
import { SubcategoryStateModel } from "../models/subcategory-state.model";


export const selectFeature = (state: AppStateModel) => state.subcategories;


export const selectFeatureSubcategories = createSelector(
  selectFeature,
  (state: SubcategoryStateModel) => state.subcategories
);

export const selectFeatureIsLoading = createSelector(
  selectFeature,
  (state: SubcategoryStateModel) => state.isLoading
);

export const selectFeatureError = createSelector(
  selectFeature,
  (state: SubcategoryStateModel) => state.error
);
