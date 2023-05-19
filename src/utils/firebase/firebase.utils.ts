import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  UserCredential,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  collection,
  query,
  getDocs,
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

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export type UserDocument = {
  displayName: string;
  email: string;
  createdAt: Date;
};

export type AdditionalUserInfo = {
  displayName?: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo?: AdditionalUserInfo,
): Promise<QueryDocumentSnapshot<UserDocument> | void> => {
  if (!userAuth) return;
  // db, collection, id: receive a doc instance
  const userDocRef = doc(db, 'users', userAuth.uid);
  // use the doc instance to check if the user exists
  const userDocSnapshot = await getDoc(userDocRef);
  const isUserDocExists = userDocSnapshot.exists();
  console;
  if (!isUserDocExists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      console.log('Error creating user', e);
    }
  }
  return userDocSnapshot as QueryDocumentSnapshot<UserDocument>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | void> => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | void> => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuthUser = async (): Promise<void> => signOut(auth);

export const onAuthStateChangesListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
