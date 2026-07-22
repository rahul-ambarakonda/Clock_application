import React from 'react';
import { Box, Image, Heading, Text, Badge, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

/**
 * ProductCard component to display product information.
 * @param {object} props - Component props.
 * @param {import("../types/product").Product} props.product - The product object.
 */
const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      shadow="md"
      _hover={{ shadow: "lg" }}
    >
      <Link as={RouterLink} to={`/products/${product.id}`}>
        <Image src={product.imageUrl || "https://via.placeholder.com/200"} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
        <Box p="6">
          <Heading as="h3" size="md" mb="2" noOfLines={1}>
            {product.name}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="teal.600" mb="2">
            ${product.price.toFixed(2)}
          </Text>
          <Text fontSize="sm" noOfLines={2} mb="3">
            {product.description}
          </Text>
          {product.category && (
            <Badge borderRadius="full" px="2" colorScheme="purple">
              {product.category}
            </Badge>
          )}
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
