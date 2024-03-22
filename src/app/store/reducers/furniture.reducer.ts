import { createReducer, on } from "@ngrx/store";
import { FurnitureStateModel } from "../models/furniture-state.model";
import * as FurnitureActions from "../actions/furniture.action";


export const initialState: FurnitureStateModel = {
  furniture: [],
  isLoading: false,
  error: null
};


export const furnitureReducers = createReducer(
  initialState,
  on(FurnitureActions.getFurniture, (state) => ({ ...state, isLoading: true })),
  on(FurnitureActions.getFurnitureSuccess, (state, action) => ({ ...state, isLoading: false, furniture: action.furniture })),
  on(FurnitureActions.getFurnitureFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
  on(FurnitureActions.getSubcategoryFurniture, (state, action) => ({ ...state, isLoading: true, categorySlug: action.categorySlug, subcategorySlug: action.subcategorySlug })),
  on(FurnitureActions.getSubcategoryFurnitureSuccess, (state, action) => ({ ...state, isLoading: false, furniture: action.furniture })),
  on(FurnitureActions.getSubcategoryFurnitureFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
)