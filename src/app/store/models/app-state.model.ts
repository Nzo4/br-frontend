import { CategoryStateModel } from "./category-state.model";
import { FurnitureStateModel } from "./furniture-state.model";
import { SubcategoryStateModel } from "./subcategory-state.model";

export interface AppStateModel {
  furniture: FurnitureStateModel;
  categories: CategoryStateModel;
  subcategories: SubcategoryStateModel;
}