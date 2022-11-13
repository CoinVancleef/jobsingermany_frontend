import React, { useState } from "react";

export default function SignUpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderForm = (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />{" "}
        </div>
        <div className="button-container-sign-up">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
