"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/api/index", (req, res) => {
  res.send("Hello World, this data is send from express server");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
