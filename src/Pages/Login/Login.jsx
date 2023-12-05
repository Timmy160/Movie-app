import React, { useState } from "react";
import "./Login.css";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [SignIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreenBackground">
        <img
          className="loginScreen_Logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Login_logo"
        />
        <button onClick={() => setSignIn(true)} className="LoginScreen_button">
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {SignIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
