const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "stackkens" },
    { id: 3, name: "john" },
  ];
  res.json(users);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
