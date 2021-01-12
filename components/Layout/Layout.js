import React from "react";
import { Navbar } from "@components/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default layout;
