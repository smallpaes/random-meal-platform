export type CategoryItem = {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoriesMap = {
  [category: string]: CategoryItem[];
};

export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES = 'SET_CATEGORIES',
}
