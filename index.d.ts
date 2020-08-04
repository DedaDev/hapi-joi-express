import { ObjectSchema } from "@hapi/joi";
import { RequestHandler } from "express";

/**
 * Checks validation for the body params.
 *
 * @param {ObjectSchema} schema Joi schema.
 * @returns {RequestHandler} Request handler.
 */
export function bodyValidation(schema: ObjectSchema): RequestHandler;

/**
 * Checks validation for the express params ex. /profile/:id.
 *
 * @param {ObjectSchema} schema Joi schema.
 * @returns {RequestHandler} Request handler.
 */
export function paramsValidation(schema: ObjectSchema): RequestHandler;

/**
 * Checks validation for the URL params.
 *
 * @param {ObjectSchema} schema Joi schema.
 * @returns {RequestHandler} Request handler.
 */
export function queryValidation(schema: ObjectSchema): RequestHandler;
