const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.json([
    { id: 1, name: "Alex" },
    { id: 2, name: "stackkens" },
    { id: 3, name: "john" },
  ]);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
