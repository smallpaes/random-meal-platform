import { AnyAction } from 'redux';
import { Category, CATEGORIES_ACTION_TYPES } from './categories.types';
export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: null | string;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction,
): CategoriesState => {
  if (action.type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START) {
    return { ...state, isLoading: true };
  }
  if (action.type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS) {
    return { ...state, categories: action.payload, isLoading: false };
  }
  if (action.type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;
};
