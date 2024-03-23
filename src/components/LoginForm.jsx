import { useState } from 'react';
import { Box, Input, Button, Text, Heading } from '@chakra-ui/react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Login
        </Button>
      </form>
      <Text mt={2} textAlign="center">
        Dont have an account? <a href="/">Sign Up</a>
      </Text>
    </Box>
  );
};

export default LoginForm;
