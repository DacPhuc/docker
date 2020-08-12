"use strict";

const express = require("express");
const bodyParser = require("body-parser");
// Constants
const PORT = 8080;

// App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/index", (req, res) => {
  const text = process.env.DAPU;
  res.status(200);
  let result = { result: "Hello this data is send from espress server" };
  res.send(JSON.stringify(result));
});

app.listen(PORT);
