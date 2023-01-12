import { UserType, useUser } from "./useUser";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  const login = (user: UserType, rememberMe: boolean) => {
    addUser(user, rememberMe);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
