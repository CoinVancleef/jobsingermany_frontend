import React, { useState } from "react";

export default function LogInForm(props) {
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
          <label>Password </label>
          <input type="password" name="pass" required />{" "}
        </div>
        <div className="button-container">
          <input type="submit" value="Log In" />
          <p onClick={() => alert(hello)}>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
