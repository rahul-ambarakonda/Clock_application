import products from '../data/products.json';

const ASYNC_DELAY = 500; // Simulate network delay

export const getAllProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, ASYNC_DELAY);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, ASYNC_DELAY);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(product => product.category.toLowerCase() === category.toLowerCase()));
    }, ASYNC_DELAY);
  });
};

export const getAllCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const categories = products.map(product => product.category);
      resolve([...new Set(categories)]);
    }, ASYNC_DELAY);
  });
};

export const searchProducts = (query) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();
      resolve(products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
      ));
    }, ASYNC_DELAY);
  });
};