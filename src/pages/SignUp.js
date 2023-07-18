import React from 'react';
import {AbsoluteCenter, Box} from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Box h="100vh">
      <AbsoluteCenter className="form-container">
        <SignUpForm/>
      </AbsoluteCenter>
    </Box>
  );
};

export default SignUp;