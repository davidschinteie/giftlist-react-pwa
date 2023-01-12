import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { useSessionStorage } from "./useSessionStorage";

export interface UserType {
  uid: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItemSession } = useSessionStorage();
  const { setItemLocal } = useLocalStorage();

  const addUser = (user: UserType, rememberMe?: boolean) => {
    setUser(user);
    if (rememberMe) {
      setItemLocal("user", JSON.stringify(user));
      // cleanup old session if exists
      if (sessionStorage.getItem("user")) {
        setItemSession("user", "");
      }
    } else {
      setItemSession("user", JSON.stringify(user));
      // cleanup old localStorage if exists
      if (localStorage.getItem("user")) {
        setItemLocal("user", "");
      }
    }
  };

  const removeUser = () => {
    setUser(null);
    if (localStorage.getItem("user")) {
      setItemLocal("user", "");
    }
    if (sessionStorage.getItem("user")) {
      setItemSession("user", "");
    }
  };

  return { user, addUser, removeUser };
};
