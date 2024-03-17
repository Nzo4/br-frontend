export interface Furniture {
  readonly name: string;
  readonly slug: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly category: string;
  readonly subcategory: string;
  readonly description: Record<string, string>;
} 