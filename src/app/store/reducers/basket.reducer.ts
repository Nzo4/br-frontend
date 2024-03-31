import { createReducer, on } from "@ngrx/store";
import { BasketStateModel } from "../models/basket-state.model";
import * as BasketActions from '../actions/basket.action';

export const initialState: BasketStateModel = {
  furniture: [],
};

export const basketReducers = createReducer(
  initialState,
  on(BasketActions.getBasket, (state) => ({ ...state })),
  on(BasketActions.addedItemInBasket, (state, { furniture }) => ({
    ...state,
    furniture: [...state.furniture, furniture],
  })),
  on(BasketActions.deletedItemFromBasket, (state, { furnitureName }) => ({
    ...state,
    furniture: state.furniture.filter(item => item.name !== furnitureName)
  })))