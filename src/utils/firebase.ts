import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { child, get, getDatabase, ref, set } from "firebase/database";

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

if (import.meta.env.VITE_ENV !== "PRODUCTION") {
  Object.assign(window, {
    FIREBASE_APPCHECK_DEBUG_TOKEN: import.meta.env
      .VITE_PUBLIC_APPCHECK_DEBUG_TOKEN,
  });
}

// App Check (reCAPTCHA)
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_PUBLIC_APPCHECK_KEY),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

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
  appCheck,
};
