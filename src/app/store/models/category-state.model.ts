import { Category } from "src/app/core/models/category.model";

export interface CategoryStateModel {
  categories: Category[],
  isLoading: boolean,
  error: string | null,
};

