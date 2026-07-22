import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Spinner, Alert, AlertIcon, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/dataService';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = getAllProducts(); // Assuming getAllProducts is synchronous
        setProducts(allProducts);
      } catch (err) {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box p="4" textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p="4">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="6" textAlign="center">
        Our Products
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;