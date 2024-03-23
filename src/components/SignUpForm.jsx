import { useState } from 'react';
import { Box, Input, Button, Text, Heading } from '@chakra-ui/react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box maxW="md" mx="auto" m={6} p={6} borderWidth="1px" borderRadius="lg" >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          mb={4}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          mb={4}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          mb={4}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          mb={4}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {formData.password !== formData.confirmPassword && (
          <Text color="red.500" mb={4} textAlign="center">Passwords do not match</Text>
        )}
        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Sign Up
        </Button>
      </form>
      <Text mt={2} textAlign="center">
        Already have an account? <a href="/login">Login</a>
      </Text>
    </Box>
  );
};

export default SignUpForm;
