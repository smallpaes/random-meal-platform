import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';

type SetCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;

export const setCategories = withMatcher(
  (categoriesArr: Category[]): SetCategories =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArr),
);
