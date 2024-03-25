import { createSelector } from "@ngrx/store";
import { AppStateModel } from "../models/app-state.model";
import { BasketStateModel } from "../models/basket-state.model";


export const selectFeature = (state: AppStateModel) => state.basket;


export const selectFeatureBasket = createSelector(
  selectFeature,
  (state: BasketStateModel) => state.furniture
);