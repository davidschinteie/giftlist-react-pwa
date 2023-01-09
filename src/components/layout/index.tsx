import React from "react";
import background from "../../assets/gifts-bk-unsplash.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="flex grow w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat mt-20"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
