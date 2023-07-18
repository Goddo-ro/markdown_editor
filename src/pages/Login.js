import React from 'react';
import LoginForm from "../components/LoginForm";
import {AbsoluteCenter, Box, Center, Container} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box h="100vh">
      <AbsoluteCenter className="form-container">
        <LoginForm/>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;