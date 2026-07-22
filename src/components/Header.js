import React from 'react';
import { Flex, Box, Link, Heading, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Flex as="nav" p="4" bg="blue.500" color="white" align="center">
      <Box p="2">
        <Heading size="md">
          <Link as={RouterLink} to="/">
            ClockApp
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" mr="4">
          Home
        </Link>
        <Link as={RouterLink} to="/about" mr="4">
          About Us
        </Link>
        <Link as={RouterLink} to="/contact">
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;