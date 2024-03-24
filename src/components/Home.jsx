import { Flex, Box, Button, useToast } from '@chakra-ui/react';
import { Navigate } from "react-router-dom";
import useStore from '../assets/useStore';

const Home = () => {
  const { user, logout, showToast, hideToast } = useStore();
  const toast = useToast(); 

  if (!user) {
    return <Navigate to="/Login" />;
  }

  const handleLogout = () => {
    logout(); 
    toast({
      title: 'Logged Out',
      description: 'You have been logged out.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  if (showToast && user) {
    toast({
      title: 'Success',
      description: `Welcome, ${user.username}!`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    hideToast();
  }

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Box fontSize="xl" mb={4}>
          Welcome, {user.username}!
        </Box>
        <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
      </Box>
    </Flex>
  );
};

export default Home;
