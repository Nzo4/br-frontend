import { Furniture } from "src/app/core/models/furniture.model";

export interface FurnitureStateModel {
  furniture: Furniture[],
  isLoading: boolean,
  error: string | null,
};

export interface FurnitureOneStateModel {
  furniture: Furniture,
  isLoading: boolean,
  error: string | null,
}
