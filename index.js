const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("I AM WORKING BUT YOUVE GOTTA WORK TOO");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});