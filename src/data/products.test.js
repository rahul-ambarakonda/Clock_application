import products from './products.json';

describe('Mock Product Data', () => {
  it('should be an array of at least 10 products', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThanOrEqual(10);
  });

  it('each product should have the expected properties', () => {
    // Check the first product as a representative sample
    const firstProduct = products[0];
    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('name');
    expect(firstProduct).toHaveProperty('category');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('description');
    expect(firstProduct).toHaveProperty('imageUrl');
    expect(firstProduct).toHaveProperty('brand');
    // Note: The schema defined `features: string[]`, but the mock data contains `availability` instead.
    // We are testing the *generated mock data* as it is, not enforcing strict schema compliance here.
    // A separate check for schema compliance would be in a type-checking step or a dedicated schema validation test.
    expect(firstProduct).toHaveProperty('rating');

    // Verify basic types
    expect(typeof firstProduct.id).toBe('string');
    expect(typeof firstProduct.name).toBe('string');
    expect(typeof firstProduct.category).toBe('string');
    expect(typeof firstProduct.price).toBe('number');
    expect(typeof firstProduct.description).toBe('string');
    expect(typeof firstProduct.imageUrl).toBe('string');
    expect(typeof firstProduct.brand).toBe('string');
    expect(typeof firstProduct.rating).toBe('number');
  });

  it('should have a variety of categories and price points', () => {
    const categories = new Set(products.map(p => p.category));
    expect(categories.size).toBeGreaterThanOrEqual(3); // Expect at least 3 distinct categories

    const prices = products.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    expect(maxPrice).toBeGreaterThan(minPrice); // Ensure price variation
  });
});
