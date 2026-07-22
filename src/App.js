import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Box p={4}>
        <Button colorScheme="teal">Hello Chakra UI</Button>
      </Box>
    </Layout>
  );
}

export default App;
