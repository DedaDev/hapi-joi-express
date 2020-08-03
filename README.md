# Express middleware for handling Joi validations.

Middleware that helps with the property validation, if the test passes, next function in the row will be invoked, otherwise, the server responds with 422 status and JSON object with a list of errors.

## API

```js
const Joi = require("@hapi/joi");
const { bodyValidation } = require("hapi-joi-express");
// also available: { paramsValidation, queryValidation }

const express = require("express");
const app = express();

const schema = Joi.object({ username: Joi.string().required() });

app.post("/login", bodyValidation(schema), (req, res) => {
  res.json({ hello: "world" });
});
```
