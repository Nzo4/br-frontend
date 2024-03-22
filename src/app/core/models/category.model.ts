import { Subcategory } from "./subcategory.model";

export interface Category {
  readonly name: string;
  readonly slug: string;
  readonly subcategories: Subcategory[];
  readonly imageCategory: string;
};

