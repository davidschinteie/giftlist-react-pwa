import { UserType } from "./../hooks/useUser";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);
const dbRef = ref(getDatabase());

// Google Auth function
const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = async () => {
  let user = null;
  try {
    const res = await signInWithPopup(auth, googleProvider);
    user = res.user;
    try {
      const snapshot = await get(child(dbRef, `users/${user.uid}`));
      if (!snapshot.exists()) {
        console.log("add new user to db");
        // add new user to database if does not exist
        set(ref(db, `users/${user.uid}`), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          authProvider: "google",
        });
      }
    } catch (err) {
      console.error(err);
    }
  } catch (err: any) {
    alert(err.message);
  }

  return user;
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  let user = null;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    user = res.user;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }

  return user;
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  let user = null;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    user = res.user;
    set(ref(db, `users/${user.uid}`), {
      uid: user.uid,
      name: name,
      email: user.email,
      authProvider: "local",
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
  return user;
};

const logout = () => {
  signOut(auth);
};

export {
  firebaseConfig,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
