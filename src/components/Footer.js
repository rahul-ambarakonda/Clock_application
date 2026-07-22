import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.700" color="white" py={{ base: 3, md: 4 }} px={{ base: 4, md: 8 }} textAlign="center">
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" mb={2}>
        <Link href="#" color="whiteAlpha.800" mx={2}>About Us</Link>
        <Link href="#" color="whiteAlpha.800" mx={2}>Contact</Link>
        <Link href="#" color="whiteAlpha.800" mx={2}>Privacy Policy</Link>
      </Flex>
      <Text fontSize={{ base: "sm", md: "md" }}>&copy; {new Date().getFullYear()} ClockApp. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
