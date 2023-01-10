import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/errorImage.svg";

interface ErrorLayoutProps {
  title: string;
  subtitle: string;
  message?: string;
  backToHome?: boolean;
}

const ErrorLayout = ({
  title,
  subtitle,
  message,
  backToHome,
}: ErrorLayoutProps) => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">{title}</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            {subtitle}
          </p>
          {message && <p className="mb-8">{message}</p>}

          {backToHome && (
            <Link
              to="/"
              className="rounded-3xl bg-white px-10 py-2 font-bold shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-slate-600 text-slate-800 hover:text-white"
            >
              back to homepage
            </Link>
          )}
        </div>
        <div className="max-w-lg">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
