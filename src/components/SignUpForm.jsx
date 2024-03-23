import { useState } from 'react';
import { Box, Input, Button, Text, Heading, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../assets/useStore';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const setUser = useStore(state => state.setUser);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if user already exists with the same email
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData && storedUserData.email === formData.email) {
      // If user with the same email exists, show a warning message
      alert('An account with this email already exists. Please use a different email.');
      return; // Exit the function
    }
  
    // Proceed with user creation if email is unique
    setUser(formData);
    navigate('/Home'); // Use navigate to go to the home page
  };



  return (
    <Flex align="center" justify="center" h="100vh">
      <Box maxW="md" mx="auto" m={6} p={6} borderWidth="1px" borderRadius="lg" textAlign="center">
      <Heading as="h2" size="lg" mb={6}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          mb={4}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          autoComplete="username" // Added autocomplete attribute
        />
        <Input
          mb={4}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="username" // Added autocomplete attribute
        />
        <Input
          mb={4}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="new-password" // Added autocomplete attribute
        />
        <Input
          mb={4}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="new-password" // Added autocomplete attribute
        />
        {formData.password !== formData.confirmPassword && (
          <Text color="red.500" mb={4}>Passwords do not match</Text>
        )}
        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Sign Up
        </Button>
      </form>
      <Text mt={2}>
        Already have an account? <a href="/login">Login</a>
      </Text>
    </Box>
    </Flex>
    
  );
};

export default SignUpForm;
