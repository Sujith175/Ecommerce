import React from "react";
import { AutheticationContainer } from "./Authentication";
import SignInForm from "../../Components/Sign-In/SignInForm.jsx";
import SignUpForm from "../../Components/Sign-up/SignUpForm.jsx";
const Auth = () => {
  return (
    <AutheticationContainer>
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in With Google</button> */}
      <SignUpForm />
    </AutheticationContainer>
  );
};

export default Auth;
