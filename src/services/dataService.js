import products from '../data/products.json';

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getAllCategories = () => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const searchProducts = (query) => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.description.toLowerCase().includes(lowerCaseQuery)
  );
};