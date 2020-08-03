import { ObjectSchema } from "@hapi/joi";
import { RequestHandler } from "express";

export default {
  /**
   * Checks validation for the body params.
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  bodyValidation: (
    schema: ObjectSchema
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery> => {},
  /**
   * Checks validation for the express route params ex. /profile/:id
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  paramsValidation: (
    schema: ObjectSchema
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery> => {},
  /**
   * Checks validation for the URL query params
   *
   * @param {ObjectSchema} schema Joi schema.
   * @returns {void} The resulting sum of the two numbers.
   */
  queryValidation: (
    schema: ObjectSchema
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery> => {},
};
