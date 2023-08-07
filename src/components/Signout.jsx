import { ButtonBase } from "@mui/material";
import { auth } from "../firebase.jsx";
import React from "react";

function Signout() {
  return (
    <div>
      <ButtonBase onClick={() => auth.signOut()}>Sign Out</ButtonBase>
    </div>
  );
}

export default Signout;
