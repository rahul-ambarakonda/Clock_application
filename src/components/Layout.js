import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from './Header'; // Import the new Header component

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header /> {/* Render the Header component here */}

      <Box as="main" flex="1" p={{ base: 4, md: 8 }}>
        {children}
      </Box>

      <Box as="footer" bg="gray.700" color="white" py={{ base: 3, md: 4 }} px={{ base: 4, md: 8 }} textAlign="center">
        <Text fontSize={{ base: "sm", md: "md" }}>&copy; {new Date().getFullYear()} ClockApp. All rights reserved.</Text>
      </Box>
    </Flex>
  );
};

export default Layout;