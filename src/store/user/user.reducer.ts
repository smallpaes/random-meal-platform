import { AnyAction } from 'redux';
import { UserDocument } from '../../utils/firebase/firebase.utils';
import { setUser } from './user.action';

export type UserState = {
  readonly user: UserDocument | null;
};

const USER_INITIAL_STATE: UserState = {
  user: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction,
): UserState => {
  if (setUser.match(action)) {
    return { ...state, user: action.payload };
  }
  return state;
};
