import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirebaseAppCheckProvider from "./components/firebase/FirebaseAppCheckProvider";
import FirebaseAppShell from "./components/firebase/FirebaseAppShell";
import { PrivateRoute } from "./components/route/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { UserType } from "./hooks/useUser";
import People from "./screens/People";
import RegisterPage from "./screens/Users/RegisterPage";
import SignInPage from "./screens/Users/SignInPage";
import { firebaseConfig } from "./utils/firebase";

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <div className="App">
      <FirebaseAppShell config={firebaseConfig}>
        <FirebaseAppCheckProvider>
          <Router>
            <AuthContext.Provider value={{ user, setUser }}>
              <Routes>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute user={user}>
                      <People />
                    </PrivateRoute>
                  }
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </AuthContext.Provider>
          </Router>
        </FirebaseAppCheckProvider>
      </FirebaseAppShell>
    </div>
  );
}

export default App;
