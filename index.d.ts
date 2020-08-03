export default {
  /**
   * Checks validation for the body params.
   *
   * @param {any} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  bodyValidation: (schema: any): void => {},
  /**
   * Checks validation for the express params ex. /profile/:id
   *
   * @param {any} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  paramsValidation: (schema: any): void => {},
  /**
   * Checks validation for the URL query params
   *
   * @param {any} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  queryValidation: (schema: any): void => {},
};
