import React from "react";
import "../Authentication/Authentication.scss";
import SignInForm from "../../Components/Sign-In/SignInForm.jsx";
import SignUpForm from "../../Components/Sign-up/SignUpForm.jsx";
const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in With Google</button> */}
      <SignUpForm />
    </div>
  );
};

export default Auth;
