const request = require('supertest');
const app = require('./app'); // Adjust the path if necessary


/**
 * Tests the root endpoint of the application.
 * 
 * This test suite verifies that the root endpoint ('/')
 * returns the expected status code and message.
 * 
 * @description
 * The test sends a GET request to the root endpoint and checks:
 * 1. The response status code is 200 (OK).
 * 2. The response text matches the expected greeting.
 */
describe('GET /', () => {
    /**
     * Tests if the root endpoint returns the correct greeting.
     * 
     * @async
     * @function
     * @returns {Promise<void>} A promise that resolves when the test is complete.
     */
    it('should return "Hello, Azure Pipelines and GitHub Actions!"', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello, Azure Pipelines and GitHub Actions!');
    });
  });

/**
 * Tests if the application returns a 404 status code for non-existent routes.
 * 
 * This test function sends a GET request to a non-existent route and verifies
 * that the response has a 404 status code, indicating that the requested
 * resource was not found.
 * 
 * @async
 * @function
 * @param {string} description - The description of the test case.
 * @param {Function} testFunction - The async function containing the test logic.
 * @returns {Promise<void>} A promise that resolves when the test is complete.
 */
test('Should return a 404 status code when accessing a non-existent route', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.status).toBe(404);
});
