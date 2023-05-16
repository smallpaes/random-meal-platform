import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger),
);
