import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 'prod_test',
    name: 'Test Product',
    category: 'Test Category',
    price: 99.99,
    description: 'This is a short description for a test product.',
    imageUrl: 'https://example.com/test_image.jpg',
    brand: 'Test Brand',
    features: ['feature1', 'feature2'], // Not directly displayed by ProductCard, but part of schema
    rating: 4.5,
  };

  it('renders product details correctly', () => {
    render(
      <ChakraProvider>
        <Router>
          <ProductCard product={mockProduct} />
        </Router>
      </ChakraProvider>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    const image = screen.getByAltText(mockProduct.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.imageUrl);

    const link = screen.getByRole('link', { name: /test product/i }); // Regex for case-insensitive search
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/products/${mockProduct.id}`);
  });

  it('uses a placeholder image if imageUrl is missing', () => {
    const productWithoutImage = { ...mockProduct, imageUrl: undefined };

    render(
      <ChakraProvider>
        <Router>
          <ProductCard product={productWithoutImage} />
        </Router>
      </ChakraProvider>
    );

    const image = screen.getByAltText(productWithoutImage.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/200');
  });

  it('does not render category badge if category is missing', () => {
    const productWithoutCategory = { ...mockProduct, category: undefined };

    render(
      <ChakraProvider>
        <Router>
          <ProductCard product={productWithoutCategory} />
        </Router>
      </ChakraProvider>
    );

    expect(screen.queryByText('Test Category')).not.toBeInTheDocument();
  });
});
