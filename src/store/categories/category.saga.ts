import { takeLatest, all, call, put } from 'typed-redux-saga';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArr = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArr));
  } catch (e) {
    yield* put(fetchCategoriesFailed(e as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
