import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';
import { UserDocument } from '../../utils/firebase/firebase.utils';

export type SetUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_USER,
  UserDocument | null
>;

export const setUser = withMatcher(
  (user: UserDocument | null): SetUser =>
    createAction(USER_ACTION_TYPES.SET_USER, user),
);
