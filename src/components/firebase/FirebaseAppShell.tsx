import type { FirebaseOptions } from "firebase/app";
import { FirebaseAppProvider } from "reactfire";

interface FirebaseAppShellProps {
  config: FirebaseOptions;
  children: React.ReactNode;
}

const FirebaseAppShell = ({ config, children }: FirebaseAppShellProps) => {
  return (
    <FirebaseAppProvider firebaseConfig={config}>
      {children}
    </FirebaseAppProvider>
  );
};

export default FirebaseAppShell;
