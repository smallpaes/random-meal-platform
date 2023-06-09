import { User } from 'firebase/auth';
import { NavigateFunction } from 'react-router-dom';
import {
  createAction,
  withMatcher,
  ActionWithPayload,
  Action,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';
import {
  UserDocument,
  AdditionalUserInfo,
} from '../../utils/firebase/firebase.utils';

export type SetUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_USER,
  UserDocument | null
>;

export const setUser = withMatcher(
  (user: UserDocument | null): SetUser =>
    createAction(USER_ACTION_TYPES.SET_USER, user),
);

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION),
);

export type GoogleSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  { dispatch: NavigateFunction }
>;

export const googleSignInStart = withMatcher(
  (dispatch: NavigateFunction): GoogleSignInStart =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, { dispatch }),
);

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { userData: { email: string; password: string }; dispatch: NavigateFunction }
>;

export const emailSignInStart = withMatcher(
  (
    userData: { email: string; password: string },
    dispatch: NavigateFunction,
  ): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { userData, dispatch }),
);

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserDocument
>;

export const signInSuccess = withMatcher(
  (user: UserDocument & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user),
);

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error),
);

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    }),
);

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalInfo: AdditionalUserInfo }
>;

export const signUpSuccess = withMatcher(
  (user: User, additionalInfo: AdditionalUserInfo): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalInfo,
    }),
);

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error),
);

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START),
);

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS),
);

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error),
);
