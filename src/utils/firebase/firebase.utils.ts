import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA64XEr_P-on7A-w7dmksRVnWsCwzNo4DY',
  authDomain: 'random-meal-platform.firebaseapp.com',
  projectId: 'random-meal-platform',
  storageBucket: 'random-meal-platform.appspot.com',
  messagingSenderId: '707026385488',
  appId: '1:707026385488:web:a408c9b694b48e76b46f55',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export const signInWIthGoogle = () => signInWithPopup(auth, provider);

// FireStore Config
export const db = getFirestore();

export type UserDocument = {
  displayName: string;
  email: string;
  createdAt: Date;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
): Promise<QueryDocumentSnapshot<UserDocument> | void> => {
  // db, collection, id: receive a doc instance
  const userDocRef = doc(db, 'users', userAuth.uid);
  // use the doc instance to check if the user exists
  const userDocSnapshot = await getDoc(userDocRef);
  const isUserDocExists = userDocSnapshot.exists();

  if (!isUserDocExists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log('Error creating user', e);
    }
  }
  return userDocSnapshot as QueryDocumentSnapshot<UserDocument>;
};
