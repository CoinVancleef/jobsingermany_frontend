import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <Link to="/">
          <h2>Jobs in Germany</h2>
        </Link>
        <div className="login-signup">
          <Link className="log-in-button">Log In</Link>
          <Link className="sign-up-button">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
