import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" bg="teal.500" color="white" py={{ base: 3, md: 4 }} px={{ base: 4, md: 8 }}>
        <Flex justify="space-between" align="center">
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
            <Link to="/">E-commerce Store</Link>
          </Text>
          <Box>
            {/* Navigation can go here */}
          </Box>
        </Flex>
      </Box>

      <Box as="main" flex="1" p={{ base: 4, md: 8 }}>
        {children}
      </Box>

      <Box as="footer" bg="gray.700" color="white" py={{ base: 3, md: 4 }} px={{ base: 4, md: 8 }} textAlign="center">
        <Text fontSize={{ base: "sm", md: "md" }}>&copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.</Text>
      </Box>
    </Flex>
  );
};

export default Layout;
