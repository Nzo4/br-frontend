import { Subcategory } from "src/app/core/models/subcategory.model";

export interface SubcategoryStateModel {
  subcategories: Subcategory[],
  isLoading: boolean,
  error: string | null,
};
