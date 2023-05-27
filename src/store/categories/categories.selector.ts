import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesMap, CategoryItem } from './categories.types';

export const selectCategoriesReducer = (state: RootState) => state.categories;

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading,
);

export const selectCategories = createSelector(
  // input selector: params used to produce the output selector
  [selectCategoriesReducer],
  (categories) => categories.categories,
);

export const selectCategoriesBasicInfo = createSelector(
  [selectCategories],
  (categories) =>
    categories.map(({ title, imageUrl }) => ({ title, imageUrl })),
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

export const selectCategoriesTopThree = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      acc.push(...category.items.slice(0, 3));
      return acc;
    }, [] as CategoryItem[]),
);
