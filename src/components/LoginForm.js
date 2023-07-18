import React, {useState} from 'react';
import {Link as RouterLink} from "react-router-dom";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputRightElement,
  Link, Center
} from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show)

  return (
    <FormControl>
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
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button isLoading={isLoading} colorScheme='teal' mt={4} w="100%">
        Login
      </Button>
      <Center mt={2}>
        <p>
          Not a member?&nbsp;
          <Link as={RouterLink} color='teal.500' to="/register">
            Signup
          </Link>
        </p>
      </Center>
    </FormControl>
  );
};

export default LoginForm;