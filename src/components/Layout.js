import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from './Header'; // Import the new Header component
import Footer from './Footer'; // Import the new Footer component

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header /> {/* Render the Header component here */}

      <Box as="main" flex="1" p={{ base: 4, md: 8 }}>
        {children}
      </Box>

      <Footer /> {/* Render the Footer component here */}
    </Flex>
  );
};

export default Layout;
