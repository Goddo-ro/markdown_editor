import React, {useState} from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show)

  const signup = () => {
    console.log(email);
    console.log(password);
    console.log(repeatPassword);
  }

  return (
    <FormControl>
      <Center mb={5}>
        <Text fontSize="2xl">Registration</Text>
      </Center>
      <FormLabel>Email:</FormLabel>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email...'
        type="email"
      />

      <FormLabel mt={4}>Password:</FormLabel>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      <FormLabel mt={4}>Repeat password:</FormLabel>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Repeat password...'
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
      </InputGroup>

      <Button onClick={signup} isLoading={isLoading} colorScheme='teal' mt={4} w="100%">
        Login
      </Button>

      <Center mt={2}>
        <p>
          Already have an account?&nbsp;
          <Link as={RouterLink} color='teal.500' to="/login">
            Login
          </Link>
        </p>
      </Center>
    </FormControl>
  );
};

export default SignUpForm;