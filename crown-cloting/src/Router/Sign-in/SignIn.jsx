import React from "react";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;
