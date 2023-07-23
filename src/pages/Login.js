import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AbsoluteCenter, Box, Center, Link, Text} from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";
import {Link as RouterLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const login = () => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }

  return (
    <Box>
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