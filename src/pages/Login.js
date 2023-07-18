import React, {useState} from 'react';
import {AbsoluteCenter, Box, Center, Container, Link, Text} from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";
import {Link as RouterLink} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = () => {
  }

  return (
    <Box h="100vh">
      <AbsoluteCenter className="form-container">
        <Center mb={5}>
          <Text fontSize="2xl">Login</Text>
        </Center>

        <AuthForm email={email} setEmail={setEmail}
                  password={password} setPassword={setPassword}
                  isLoading={isLoading} errorMessage={errorMessage}
                  submit={login} title={"Login"} link={"/register"}
        />

        <Center mt={2}>
          <p>
            Not a member?&nbsp;
            <Link as={RouterLink} color='teal.500' to="/register">
              Signup
            </Link>
          </p>
        </Center>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;