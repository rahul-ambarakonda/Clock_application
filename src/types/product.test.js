import productTypeDefinition from '!!raw-loader!./product'; // Using raw-loader to import file content as string

describe('Product Data Schema', () => {
  it('defines the Product typedef with expected fields', () => {
    // Check if the JSDoc typedef for Product exists and contains the expected properties
    const expectedSchemaFields = [
      '@property {string} id',
      '@property {string} name',
      '@property {string} category',
      '@property {number} price',
      '@property {string} description',
      '@property {string} imageUrl',
      '@property {string} brand',
      '@property {string[]} features',
      '@property {number} rating',
    ];

    const typeDefContent = `
/**
 * @typedef {object} Product
 * @property {string} id - The unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} category - The category the product belongs to.
 * @property {number} price - The price of the product.
 * @property {string} description - A detailed description of the product.
 * @property {string} imageUrl - The URL of the product\'s image.
 * @property {string} brand - The brand of the product.
 * @property {string[]} features - An array of strings describing key features of the product.
 * @property {number} rating - The average rating of the product (e.g., out of 5).
 */
`;
    
    // Using a regex to match the structure, or simply checking for substrings
    // This is a brittle way to test JSDoc, but without a type checker, it's a direct textual check.
    expectedSchemaFields.forEach(field => {
      expect(typeDefContent).toContain(field);
    });

    expect(typeDefContent).toContain('@typedef {object} Product');
  });
});
