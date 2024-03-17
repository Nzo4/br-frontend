import { createReducer, on } from "@ngrx/store";
import { CategoryStateModel } from "../models/category-state.model";
import * as CategoryActions from '../actions/categories.action';


export const initialState: CategoryStateModel = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoryReducers = createReducer(
  initialState,
  on(CategoryActions.getCategory, (state) => ({ ...state, isLoading: true })),
  on(CategoryActions.getCategorySuccess, (state, action) => ({ ...state, isLoading: false, categories: action.categories })),
  on(CategoryActions.getCategoryFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);

