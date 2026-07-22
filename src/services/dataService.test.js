import { getAllProducts, getProductById, getProductsByCategory, searchProducts, getAllCategories } from './dataService';
import mockProducts from '../data/products.json';

jest.useFakeTimers();

describe('dataService', () => {
  // Reset mocks before each test to ensure isolation
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('getAllProducts should return all products after a delay', async () => {
    const promise = getAllProducts();
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(mockProducts);
  });

  it('getProductById should return a single product by ID after a delay', async () => {
    const productId = mockProducts[0].id;
    const promise = getProductById(productId);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(mockProducts[0]);
  });

  it('getProductById should return undefined if product is not found', async () => {
    const nonExistentId = 'non_existent_id';
    const promise = getProductById(nonExistentId);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it('getProductsByCategory should return products filtered by category after a delay', async () => {
    const category = 'Refrigerators';
    const expectedProducts = mockProducts.filter(p => p.category === category);
    const promise = getProductsByCategory(category);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(expectedProducts);
  });

  it('getProductsByCategory should be case-insensitive', async () => {
    const category = 'refrigERATORS'; // Test case-insensitivity
    const expectedProducts = mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    const promise = getProductsByCategory(category);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(expectedProducts);
  });

  it('getAllCategories should return a unique list of categories after a delay', async () => {
    const expectedCategories = [...new Set(mockProducts.map(p => p.category))];
    const promise = getAllCategories();
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(expectedCategories);
  });

  it('searchProducts should return products matching query in name or description after a delay', async () => {
    const query = 'washer';
    const lowerCaseQuery = query.toLowerCase();
    const expectedProducts = mockProducts.filter(p =>
      p.name.toLowerCase().includes(lowerCaseQuery) ||
      p.description.toLowerCase().includes(lowerCaseQuery)
    );
    const promise = searchProducts(query);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(expectedProducts);
  });

  it('searchProducts should be case-insensitive', async () => {
    const query = 'WASHER'; // Test case-insensitivity
    const lowerCaseQuery = query.toLowerCase();
    const expectedProducts = mockProducts.filter(p =>
      p.name.toLowerCase().includes(lowerCaseQuery) ||
      p.description.toLowerCase().includes(lowerCaseQuery)
    );
    const promise = searchProducts(query);
    jest.advanceTimersByTime(500);
    const result = await promise;
    expect(result).toEqual(expectedProducts);
  });
});
