import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock Header and Footer to avoid deeper component rendering issues for this test
jest.mock('./Header', () => () => <div data-testid="mock-header">Mock Header</div>);
jest.mock('./Footer', () => () => <div data-testid="mock-footer">Mock Footer</div>);

describe('Layout', () => {
  it('renders children content correctly', () => {
    const testChildText = 'This is a test child component';

    render(
      <ChakraProvider>
        <Router> {/* Layout expects Header/Footer which might use Link from Router */}
          <Layout>
            <div>{testChildText}</div>
          </Layout>
        </Router>
      </ChakraProvider>
    );

    expect(screen.getByText(testChildText)).toBeInTheDocument();
  });

  it('renders Header and Footer components', () => {
    render(
      <ChakraProvider>
        <Router>
          <Layout>
            <div>Child content</div>
          </Layout>
        </Router>
      </ChakraProvider>
    );

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
