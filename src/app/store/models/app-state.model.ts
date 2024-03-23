import { CategoryStateModel } from "./category-state.model";
import { FurnitureOneStateModel, FurnitureStateModel } from "./furniture-state.model";

export interface AppStateModel {
  furniture: FurnitureStateModel;
  furnitureOne: FurnitureOneStateModel;
  categories: CategoryStateModel;
}