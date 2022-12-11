import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import "../Sign-In/SignIn-Form.scss";
import Button from "../Button/ButtonComponent";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import {
  createUserDocumentFromAuth,
  SignInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/formInputComponent";
const defaultFormFeild = {
  email: "",
  password: "",
};
const signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();

  await createUserDocumentFromAuth(user);
};

const SignInForm = () => {
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { email, password } = formFeild;

  //reset form feild
  const resetFormFeilds = () => {
    setFormFeild(defaultFormFeild);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formFeild, [name]: value });
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid Credentials");
          break;

        case "auth/user-not-found":
          alert("User with this Email is not Registered");
          break;
        default:
          console.log(error);
          break;
      }
    }
    //
    //
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an Account?</h2>
      <span>sign In with Your Email And Password</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle} type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
