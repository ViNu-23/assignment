import { useState } from 'react';
import { Box, Input, Button, Text, Heading, useToast, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../assets/useStore';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const setUser = useStore(state => state.setUser);
  const navigate = useNavigate();
  const toast = useToast(); // Initialize toast

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and credentials match
    if (
      storedUserData &&
      storedUserData.email === formData.email &&
      storedUserData.password === formData.password
    ) {
      // If user exists and credentials match, proceed with login
      setUser(storedUserData); // Set user data from local storage
      navigate('/Home');
    } else {
      // If user doesn't exist or credentials don't match, show error message
      console.log('Invalid credentials. Please try again.');
      toast({
        title: 'Error',
        description: 'Invalid credentials. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
       <Box maxW="md" mx="auto" m={6} p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          mb={4}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="userName"
          required
        />
        <Input
          mb={4}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          autoComplete="current-password"
          onChange={handleChange}
          required
        />
        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Login
        </Button>
      </form>
      <Text mt={2} textAlign="center">
        Don't have an account? <a href="/">Sign Up</a>
      </Text>
    </Box>
    </Flex>
   
  );
};

export default LoginForm;
