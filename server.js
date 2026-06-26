const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "stackkens" },
  { id: 3, name: "john" },
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "user Not found" });
  }
  res.json(user);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
