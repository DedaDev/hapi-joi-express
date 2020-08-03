import { ObjectSchema } from "@hapi/joi";

export default {
  /**
   * Checks validation for the body params.
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  bodyValidation: (schema: ObjectSchema): void => {},
  /**
   * Checks validation for the express params ex. /profile/:id
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  paramsValidation: (schema: ObjectSchema): void => {},
  /**
   * Checks validation for the URL query params
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  queryValidation: (schema: ObjectSchema): void => {},
};
