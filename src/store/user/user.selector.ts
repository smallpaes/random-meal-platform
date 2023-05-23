import { createSelector } from 'reselect';
import { UserState } from './user.reducer';
import { RootState } from '../store';

export const selectUser = (state: RootState): UserState => state.user;

export const selectUserIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading,
);
