import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.jsx";
import { IconButton } from "@mui/material";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <IconButton onClick={signInWithGoogle}>Google Login</IconButton>
    </div>
  );
}

export default SignIn;
