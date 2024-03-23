import { createSelector } from "@ngrx/store";
import { AppStateModel } from "../models/app-state.model";
import { FurnitureOneStateModel, FurnitureStateModel } from "../models/furniture-state.model";


export const selectFeature = (state: AppStateModel) => state.furniture;

export const selectFeatureFurniture = createSelector(
  selectFeature,
  (state: FurnitureStateModel) => state.furniture
);

export const selectFeatureIsLoading = createSelector(
  selectFeature,
  (state: FurnitureStateModel) => state.isLoading
);

export const selectFeatureError = createSelector(
  selectFeature,
  (state: FurnitureStateModel) => state.error
);

export const selectFeatureOne = (state: AppStateModel) => state.furnitureOne;

export const selectFeatureFurnitureOne = createSelector(
  selectFeatureOne,
  (state: FurnitureOneStateModel) => state.furniture
);

export const selectFeatureFurnitureOneIsLoading = createSelector(
  selectFeatureOne,
  (state: FurnitureOneStateModel) => state.isLoading
);

export const selectFeatureFurnitureOneError = createSelector(
  selectFeatureOne,
  (state: FurnitureOneStateModel) => state.error
);


