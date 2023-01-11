import { useEffect } from "react";
import { UserType, useUser } from "./useUser";
import { useSessionStorage } from "./useSessionStorage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useSessionStorage();

  const login = (user: UserType) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
