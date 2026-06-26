const express = require("express");
const morgan = require("morgan");

const authMiddleWare = require("./middleware/authMiddleware");
const { getAllUsers, getUserById } = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = 8000;

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
});

//get request
app.get("/", (req, res) => {
  res.send("Hello world");
});

// const users = [
//   { id: 1, name: "Alex" },
//   { id: 2, name: "stackkens" },
//   { id: 3, name: "john" },
// ];

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((u) => u.id === id);

//   if (!user) {
//     return res.status(404).json({ message: "user Not found" });
//   }
//   res.json(user);
// });

//get users

// app.get("/api/users", getAllUsers);
// app.get("/api/users/:id", getUserById);

app.use("/users", userRoutes);
//post request

app.post("/api/auth/user/login", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//dashboard route

app.get("/dashboard", authMiddleWare, (req, res) => {
  res.json({ message: " Welcome to the dashboard!" });
});

//starting the server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
