import React, {useState} from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";

const AuthForm = (props) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl>
      <FormLabel>Email:</FormLabel>
      <Input
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
        placeholder='Email...'
        type="email"
      />
      <FormLabel mt={4}>Password:</FormLabel>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password...'
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={() => setShow(old => !old)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Center mt={2} color="red.400">
        <Text className="error-message">{props.errorMessage}</Text>
      </Center>

      <Button onClick={props.submit} isLoading={props.isLoading} colorScheme='teal' mt={4} w="100%">
        {props.title}
      </Button>
    </FormControl>
  );
};

export default AuthForm;