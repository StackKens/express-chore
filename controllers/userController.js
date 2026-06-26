//university students
const users = [
  { id: 1, name: "alex", university: "Victoria", year: 2 },
  { id: 2, name: "pius", university: "MIT", year: 4 },
  { id: 3, name: "alex", university: "Kyambogo", year: 1 },
  { id: 4, name: "alex", university: "KIU", year: 3 },
  { id: 5, name: "alex", university: "MUBStoria", year: 6 },
];

//get all users

const getAllUsers = (req, res) => {
  res.json({ users });
};

//get user by id

const getUserById = (req, res) => {
  const userId = Number(req.params.id);
  const userById = users.find((user) => user.id === userId);

  //if no user found

  if (!userById) {
    return res.status(404).res.json({ message: "user not found" });
  }

  res.json({ userById });
};

module.exports = { getAllUsers, getUserById };
