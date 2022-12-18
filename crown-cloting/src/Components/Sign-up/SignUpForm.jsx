import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import "../Sign-up/SignUp-Form.scss";
import Button from "../Button/ButtonComponent";
import { useContext } from "react";
import { userContext } from "../../Contexts/Contexts";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/formInputComponent";
const defaultFormFeild = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { displayName, email, password, confirmPassword } = formFeild;

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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName }); //google provide display name will be null
      // setCurrentUser(user);  used observer pattern
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create User with Existing Email");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an Account?</h2>
      <form onSubmit={onSubmitHandle}>
        <span className="">Sign Up with Your Email & Password</span>

        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button children="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
