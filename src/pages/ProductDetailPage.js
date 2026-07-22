import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-router-dom';
import { Box, Image, Text, Heading, VStack, HStack, Spinner, Container, Tag, StackDivider, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { getProductById } from '../services/dataService';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const foundProduct = await getProductById(id);
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container centerContent mt={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading product details...</Text>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container centerContent mt={10}>
        <Heading>Product Not Found</Heading>
        <Text mt={4}>The product you are looking for does not exist.</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <HStack align="flex-start" spacing={8} direction={{ base: 'column', md: 'row' }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            src={product.imageUrl || "https://via.placeholder.com/400"}
            alt={product.name}
            objectFit="cover"
            width={{ base: '100%', md: '400px' }}
            height={{ base: 'auto', md: '400px' }}
          />
        </Box>
        <VStack align="flex-start" spacing={4} flex="1">
          <Tag size="lg" colorScheme="purple">{product.brand}</Tag>
          <Heading as="h1" size="xl">{product.name}</Heading>
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">${product.price.toFixed(2)}</Text>
          <Text fontSize="md">{product.description}</Text>

          <Box width="100%">
            <Heading as="h3" size="md" mb={2}>Features</Heading>
            <List spacing={2} divider={<StackDivider borderColor='gray.200' />}>
              {product.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {feature}
                </ListItem>
              ))}
            </List>
          </Box>

          <Text fontSize="lg" mt={4}>Rating: <Box as="span" fontWeight="bold">{product.rating}</Box> / 5</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default ProductDetailPage;
