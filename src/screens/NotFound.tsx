import React from "react";
import ErrorLayout from "../components/error";

const NotFound = () => {
  return (
    <ErrorLayout
      title="404"
      subtitle="Sorry we couldn't find this page."
      message="But dont worry, you can find plenty of other things on our homepage."
      backToHome
    />
  );
};

export default NotFound;
