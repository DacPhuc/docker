"use strict";

const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/api/index", (req, res) => {
  res.send("Hello World, this data is send from express server");
});

app.listen(PORT);
