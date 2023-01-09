import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { useAuth } from "../../hooks/useAuth";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../utils/firebase";

type errorType = {
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  passwordMatchError: string;
};

const RegisterPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<errorType>({
    emailError: "Field Email is required",
    passwordError: "Field Password is required",
    confirmPasswordError: "Field Confirm Password is required",
    passwordMatchError: "",
  });
  const emptyErrors = Object.values(error).find((v) => v !== "") === undefined;

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError({ ...error, passwordMatchError: "Passwords do not match" });
      }
    }
    return isValid;
  };

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validatePassword()) {
      try {
        const user = await registerWithEmailAndPassword(name, email, password);
        if (user !== null) {
          login({
            uid: user.uid ?? "",
            name: user.displayName ?? "",
            email: user.email ?? "",
          });
        }
        navigate("/");
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setError({ ...error, emailError: "Field Email is required" });
    } else {
      setError({ ...error, emailError: "" });
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value === "") {
      setError({ ...error, passwordError: "Field Password is required" });
    } else if (confirmPassword !== event.target.value) {
      setError({
        ...error,
        passwordError: "",
        passwordMatchError: "Passwords do not match",
      });
    } else {
      setError({ ...error, passwordError: "", passwordMatchError: "" });
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);

    if (event.target.value === "") {
      setError({
        ...error,
        confirmPasswordError: "Field Confirm Password is required",
      });
    } else if (password !== event.target.value) {
      setError({
        ...error,
        confirmPasswordError: "",
        passwordMatchError: "Passwords do not match",
      });
    } else {
      setError({ ...error, confirmPasswordError: "", passwordMatchError: "" });
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Sign Up</h1>
            </div>
            <form onSubmit={register}>
              <div className="flex items-center mb-4 text-lg">
                <svg
                  className="absolute ml-3 z-10 fill-slate-800"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 pl-12 font-medium text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="flex items-center mb-4 text-lg">
                <svg
                  className="absolute ml-3 z-10 fill-slate-800"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 pl-12 font-medium text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
                />
              </div>

              <div className="flex items-center mb-4 text-lg">
                <svg
                  className="absolute ml-3 z-10 fill-slate-800"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <input
                  className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 pl-12 font-medium text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center mb-4 text-lg">
                <svg
                  className="absolute ml-3 z-10 fill-slate-800"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <input
                  className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 pl-12 font-medium text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm Password"
                />
              </div>

              {!emptyErrors && (
                <div className="flex items-center mb-4 text-lg">
                  <p className="text-sm text-red-300 font-medium">
                    {Object.values(error).find((v) => v !== "")}
                  </p>
                </div>
              )}
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  disabled={!emptyErrors}
                  className={`rounded-3xl bg-white px-10 py-2 font-bold shadow-xl backdrop-blur-md transition-colors duration-300 ${
                    emptyErrors
                      ? "hover:bg-slate-600 text-slate-800 hover:text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  Save
                </button>
              </div>
            </form>

            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                onClick={signInWithGoogle}
                className="group h-12 px-6 rounded-3xl bg-white text-slate-800 shadow-xl backdrop-blur-md transition-colors duration-300
hover:bg-slate-600 focus:bg-blue-50 active:bg-blue-100"
              >
                <div className="relative flex items-center space-x-3 justify-center">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                    className="w-5"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">
                    Sign Up with Google
                  </span>
                </div>
              </button>
            </div>
            <div className="mt-8 flex justify-center text-sm text-black">
              <Link to="/sign-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  viewBox="0 0 640 512"
                  className="w-4 h-4 inline-block align-text-top fill-white"
                >
                  <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
                <span className="inline-block ml-1 text-white">
                  Login with an existing account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RegisterPage;
