import { createUserWithEmailAndPassword } from "firebase/auth";

import { Recat, useContext, useState } from "react";
import { ButtonsContainer, SignInContainer } from "./SignIn-Form";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/ButtonComponent";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { SignInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/formInputComponent";
const defaultFormFeild = {
  email: "",
  password: "",
};

//main function
const SignInForm = () => {
  //signin with google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // setCurrentUser(user);   //used observer pattern
  };

  //context
  // const { setCurrentUser } = useContext(userContext); /used observer pattern

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
      // setCurrentUser(response);  //used observer pattern
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
    <SignInContainer>
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
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPES_CLASSES.base} type="submit">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
