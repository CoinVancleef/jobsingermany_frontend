import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import Popup from "./Popup";
import SignUpForm from "./SignUpForm";

export default function Header() {
  const [isTriggerLogIn, setIsTriggerLogIn] = useState(false);
  const [isTriggerSignUp, setIsTriggerSignUp] = useState(false);
  return (
    <header>
      <div className="header-wrapper">
        <Link to="/">
          <h2>Jobs in Germany</h2>
        </Link>
        <div className="login-signup">
          <button
            onClick={() => setIsTriggerLogIn(true)}
            className="log-in-button"
          >
            Log In
          </button>
          <Popup setter={setIsTriggerLogIn} trigger={isTriggerLogIn}>
            <LogInForm />
          </Popup>
          <button
            onClick={() => setIsTriggerSignUp(true)}
            className="sign-up-button"
          >
            Sign Up
          </button>
          <Popup setter={setIsTriggerSignUp} trigger={isTriggerSignUp}>
            <SignUpForm />
          </Popup>
        </div>
      </div>
    </header>
  );
}
