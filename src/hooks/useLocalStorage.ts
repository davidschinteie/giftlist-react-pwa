import { useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItemLocal = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItemLocal = (key: string) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItemLocal = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItemLocal, getItemLocal, removeItemLocal };
};
