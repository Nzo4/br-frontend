import { createSelector } from "@ngrx/store";
import { AppStateModel } from "../models/app-state.model";
import { CategoryStateModel } from "../models/category-state.model";


export const selectFeature = (state: AppStateModel) => state.categories;

export const selectFeatureCategories = createSelector(
  selectFeature,
  (state: CategoryStateModel) => state.categories
);

export const selectFeatureIsLoading = createSelector(
  selectFeature,
  (state: CategoryStateModel) => state.isLoading
);

export const selectFeatureError = createSelector(
  selectFeature,
  (state: CategoryStateModel) => state.error
);
