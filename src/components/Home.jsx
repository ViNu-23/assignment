import { Flex, Box, Button, } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box textAlign="center">
        <Box fontSize="xl" mb={4}>
          Welcome to Home Page!
        </Box>
        <Button colorScheme="red">Logout</Button>
      </Box>
    </Flex>
  );
};

export default Home;
