import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesMap } from './categories.types';

export const selectCategoriesReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  // input selector: params used to produce the output selector
  [selectCategoriesReducer],
  (categories) => categories.categories,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap),
);
