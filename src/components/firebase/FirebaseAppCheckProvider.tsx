import {
  getToken,
  initializeAppCheck,
  ReCaptchaV3Provider,
} from "firebase/app-check";
import { useState } from "react";
import { useFirebaseApp } from "reactfire";

const siteKey = import.meta.env.VITE_PUBLIC_APPCHECK_KEY;

interface FirebaseAppCheckProviderProps {
  children: React.ReactNode;
}

const FirebaseAppCheckProvider = ({
  children,
}: FirebaseAppCheckProviderProps) => {
  const [appCheck, setAppCheck] = useState(false);

  if (import.meta.env.VITE_ENV !== "PRODUCTION") {
    Object.assign(window, {
      FIREBASE_APPCHECK_DEBUG_TOKEN: import.meta.env
        .VITE_PUBLIC_APPCHECK_DEBUG_TOKEN,
    });
  }

  if (siteKey) {
    const app = useFirebaseApp();
    const provider = new ReCaptchaV3Provider(siteKey);
    const googleAppCheck = initializeAppCheck(app, {
      provider,
      isTokenAutoRefreshEnabled: true,
    });
    getToken(googleAppCheck)
      .then(() => {
        console.log("Successfully initialized");
        setAppCheck(true);
      })
      .catch((error) => {
        console.log(error.message);
        setAppCheck(false);
      });
  }

  console.log("appCheck", appCheck);

  return (
    <>
      {appCheck && <>{children}</>}
      {!appCheck && <>Something went wrong!</>}
    </>
  );
};

export default FirebaseAppCheckProvider;
