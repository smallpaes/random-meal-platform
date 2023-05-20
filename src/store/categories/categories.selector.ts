import { RootState } from '../store';
import { CategoriesMap } from './categories.types';

export const selectCategoriesReducer = (state: RootState) => state.categories;

export const selectCategories = (state: RootState) =>
  state.categories.categories;

export const selectCategoriesMap = (state: RootState) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoriesMap);
