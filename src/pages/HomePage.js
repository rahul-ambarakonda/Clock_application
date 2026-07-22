import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Spinner, Alert, AlertIcon, Heading, Button, Stack } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { getAllProducts, getProductsByCategory, getAllCategories } from '../services/dataService';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const fetchedCategories = getAllCategories();
        setCategories(fetchedCategories);

        const allProducts = getAllProducts();
        setProducts(allProducts);
      } catch (err) {
        setError('Failed to fetch initial data.');
        console.error('Error fetching initial data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let fetchedProducts;
        if (selectedCategory) {
          fetchedProducts = getProductsByCategory(selectedCategory);
        } else {
          fetchedProducts = getAllProducts();
        }
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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
      <Stack direction="row" spacing={4} mb={6} justify="center" wrap="wrap">
        <Button
          onClick={() => setSelectedCategory(null)}
          colorScheme={selectedCategory === null ? 'teal' : 'gray'}
        >
          All Products
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            colorScheme={selectedCategory === category ? 'teal' : 'gray'}
          >
            {category}
          </Button>
        ))}
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;