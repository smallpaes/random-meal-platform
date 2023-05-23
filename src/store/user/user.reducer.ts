import { AnyAction } from 'redux';
import { UserDocument } from '../../utils/firebase/firebase.utils';
import {
  signInSuccess,
  signInFailed,
  signUpStart,
  signUpFailed,
  signOutSuccess,
  emailSignInStart,
  googleSignInStart,
  signOutFailed,
} from './user.action';

export type UserState = {
  readonly user: UserDocument | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction,
): UserState => {
  if (
    signUpStart.match(action) ||
    emailSignInStart.match(action) ||
    googleSignInStart.match(action)
  ) {
    return { ...state, isLoading: true };
  }
  if (signInSuccess.match(action)) {
    return { ...state, user: action.payload, isLoading: false, error: null };
  }
  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, isLoading: false, error: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, user: null, isLoading: false, error: null };
  }
  return state;
};
