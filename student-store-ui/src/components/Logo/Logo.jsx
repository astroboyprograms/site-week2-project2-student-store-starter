import * as React from "react";
import "./Logo.css";
import CodePathLogo from "../CodePathLogo/CodePathLogo.svg";

//import ProductDetail from "../ProductDetail/ProductDetail";

// This is the Logo component.
export default function Logo() {
  return (
    // Logo is wrapped by a div element with a className of logo.
    <div className="logo">
      {/* Logo goes here */}
      <img src={CodePathLogo} alt="CodePath Logo" />
    </div>
  );
}

