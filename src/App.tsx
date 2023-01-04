import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/route/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { UserType } from "./hooks/useUser";
import People from "./screens/People";
import RegisterPage from "./screens/Users/RegisterPage";
import SignInPage from "./screens/Users/SignInPage";

function App() {
  // const { user, login, logout } = useAuth();
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute user={user}>
                  <People />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signIn" element={<SignInPage />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
