import { takeLatest, call, put, all } from 'typed-redux-saga';
import { User } from 'firebase/auth';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
  GoogleSignInStart,
} from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  AdditionalUserInfo,
  signInWIthGoogle,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutAuthUser,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalUserInfo,
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo,
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }),
      );
    }
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signInUsingGoogle({
  payload: { dispatch },
}: GoogleSignInStart) {
  try {
    const { user } = yield* call(signInWIthGoogle);
    yield* call(getSnapshotFromUserAuth, user);
    dispatch('/');
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* onSignInWithGoogleStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInUsingGoogle);
}

export function* signInUsingEmailAndPassword({
  payload: {
    userData: { email, password },
    dispatch,
  },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password,
    );
    if (userCredential) {
      yield* call(getSnapshotFromUserAuth, userCredential.user);
    }
    dispatch('/');
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* onSignInWithEmailAndPasswordStart() {
  yield* takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInUsingEmailAndPassword,
  );
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
    );
    if (userCredential) {
      yield* put(signUpSuccess(userCredential.user, { displayName }));
    }
  } catch (e) {
    yield* put(signUpFailed(e as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInfo },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* signOut() {
  try {
    yield* call(signOutAuthUser);
    yield* put(signOutSuccess());
  } catch (e) {
    yield* put(signOutFailed(e as Error));
  }
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailAndPasswordStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
