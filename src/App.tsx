import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorLayout from "./components/error";
import { PrivateRoute } from "./components/route/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { UserType } from "./hooks/useUser";
import NotFound from "./screens/NotFound";
import People from "./screens/People";
import RegisterPage from "./screens/Users/RegisterPage";
import SignInPage from "./screens/Users/SignInPage";

function App() {
  const userFromStorage =
    sessionStorage.getItem("user") ?? localStorage.getItem("user");
  const [user, setUser] = useState<UserType | null>(
    userFromStorage ? JSON.parse(userFromStorage) : null
  );

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <People />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/403"
              element={<ErrorLayout title="403" subtitle="Permission denied" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
