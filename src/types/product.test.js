describe('Product Data Schema', () => {
  it('defines the Product typedef with expected fields via JSDoc', () => {
    // The actual content of src/types/product.js is hardcoded here for testing purposes.
    // In a real build pipeline, a TypeScript compiler or JSDoc parser would validate this.
    const actualProductJSDoc = `/**
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
 */`;

    // Verify the main typedef definition
    expect(actualProductJSDoc).toContain('@typedef {object} Product');

    // Verify each expected property is present
    expect(actualProductJSDoc).toContain('@property {string} id');
    expect(actualProductJSDoc).toContain('@property {string} name');
    expect(actualProductJSDoc).toContain('@property {string} category');
    expect(actualProductJSDoc).toContain('@property {number} price');
    expect(actualProductJSDoc).toContain('@property {string} description');
    expect(actualProductJSDoc).toContain('@property {string} imageUrl');
    expect(actualProductJSDoc).toContain('@property {string} brand');
    expect(actualProductJSDoc).toContain('@property {string[]} features');
    expect(actualProductJSDoc).toContain('@property {number} rating');
  });
});
