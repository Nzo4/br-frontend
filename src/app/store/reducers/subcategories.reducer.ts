import { createReducer, on } from "@ngrx/store";
import { SubcategoryStateModel } from "../models/subcategory-state.model";
import * as SubcategoryActions from "../actions/subcategories.actions";


export const inititalState: SubcategoryStateModel = {
  subcategories: [],
  isLoading: false,
  error: null
};


export const subcategoryReducers = createReducer(
  inititalState,
  on(SubcategoryActions.getSubcategory, (state, action) => ({ ...state, isLoading: true })),
  on(SubcategoryActions.getSubcategorySuccess, (state, action) => ({ ...state, isLoading: false, subcategories: action.subcategories })),
  on(SubcategoryActions.getSubcategoryFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);