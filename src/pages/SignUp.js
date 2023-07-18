import React, {useState} from 'react';
import {AbsoluteCenter, Box, Center, Link, Text} from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";
import {Link as RouterLink} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = () => {
    setIsLoading(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }

  return (
    <Box h="100vh">
      <AbsoluteCenter className="form-container">
        <Center mb={5}>
          <Text fontSize="2xl">Registration</Text>
        </Center>

        <AuthForm email={email} setEmail={setEmail}
                  password={password} setPassword={setPassword}
                  isLoading={isLoading} errorMessage={errorMessage}
                  submit={register} title={"Sign Up"}
        />

        <Center mt={2}>
          <p>
            Already have an account?&nbsp;
            <Link as={RouterLink} color='teal.500' to="/login">
              Login
            </Link>
          </p>
        </Center>
      </AbsoluteCenter>
    </Box>
  );
};

export default SignUp;