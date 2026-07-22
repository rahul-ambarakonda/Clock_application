import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

// Mock the Layout component as its internal dependencies (Header, Footer) are complex
jest.mock('./components/Layout', () => ({ children }) => <div data-testid="mock-layout">{children}</div>);
// Mock HomePage and ProductDetailPage to prevent their internal logic from interfering
jest.mock('./pages/HomePage', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('./pages/ProductDetailPage', () => () => <div data-testid="product-detail-page">Product Detail Page</div>);

describe('App Routing and Basic Rendering', () => {
  it('renders the Home Page on the / route', () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </ChakraProvider>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders the Product Detail Page on the /products/:id route', () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={['/products/123']}>
          <App />
        </MemoryRouter>
      </ChakraProvider>
    );
    expect(screen.getByTestId('product-detail-page')).toBeInTheDocument();
  });

  it('renders the Layout component', () => {
    render(
      <ChakraProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </ChakraProvider>
    );
    expect(screen.getByTestId('mock-layout')).toBeInTheDocument();
  });
});
