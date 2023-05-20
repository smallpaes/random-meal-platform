import { AnyAction } from 'redux';
import { Category } from './categories.types';
import { setCategories } from './categories.action';

export type CategoriesState = {
  readonly categories: Category[];
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction,
): CategoriesState => {
  if (setCategories.match(action)) {
    return { ...state, categories: action.payload };
  }
  return state;
};
