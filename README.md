# Express middleware for handling Joi validations with typescript support.

Middleware that helps with the property validation, if the test passes, next function in the row will be invoked, otherwise, the server responds with 422 status and JSON object with a list of errors.

## API

```js
const app = require("express")();
const { bodyValidation } = require("hapi-joi-express");
// also available: { paramsValidation, queryValidation }

const schema = Joi.object({ username: Joi.string().required() });

app.post("/login", bodyValidation(schema), (req, res) =>
  res.json({ hello: "world" })
);
```

### ES6 imports

```js
import express from "express";
import { queryValidation } from "hapi-joi-express";
// also available: { paramsValidation, queryValidation }

const app = express();

const schema = Joi.object({ username: Joi.string().required() });

app.post("/login", bodyValidation(schema), (req, res) =>
  res.json({ hello: "world" })
);
```
