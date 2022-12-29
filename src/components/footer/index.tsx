import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center w-full p-4 bg-slate-800 text-white">
      <p className="text-center text-sm text-blueGray-500 font-semibold py-1 font-sans">
        Copyright © {new Date().getFullYear()} GiftList by{" "}
        <Link
          className="font-semibold hover:text-gray-300"
          to="https://github.com/davidschinteie"
        >
          David Schinteie
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
