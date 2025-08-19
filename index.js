const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let users = [
  { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
  { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
  { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
  { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
  { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
  { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 }
];

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>Available Routes</h1>
    <ul>
      <li>Root Route: Displays available routes.</li>
      <li>GET /api/users: Returns all users.</li>
      <li>GET /api/users/:id: Fetches a specific user by ID.</li>
      <li>GET /api/users/: Retrieves and displays parameters.</li>
      <li>POST /api/add/: Adds a new user through form submission.</li>
      <li>DELETE /api/delete/: Deletes a user by ID.</li>
    </ul>
  `);
});


app.get("/api/users", (req, res) => {
  res.json(users);
});


app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});


app.get("/api/users/:param1/:param2", (req, res) => {
  res.json({ param1: req.params.param1, param2: req.params.param2 });
});


app.get("/api/add", (req, res) => {
  res.send(`
    <h2>Add a New User</h2>
    <form action="/api/users" method="POST">
      <label>Name: <input type="text" name="name" required></label><br>
      <label>Email: <input type="email" name="email" required></label><br>
      <label>Age: <input type="number" name="age" required></label><br>
      <label>Salary: <input type="number" name="salary" required></label><br>
      <button type="submit">Add User</button>
    </form>
  `);
});


app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name: req.body.name,
    email: req.body.email,
    age: parseInt(req.body.age),
    salary: parseInt(req.body.salary),
  };
  users.push(newUser);
  res.send(`<p>User <strong>${newUser.name}</strong> added successfully.</p><a href="/">Back to Home</a>`);
});


app.get("/api/delete", (req, res) => {
  res.send(`
    <h2>Delete a User</h2>
    <form action="/api/delete" method="POST">
      <label>User ID: <input type="number" name="id" required></label><br>
      <button type="submit">Delete User</button>
    </form>
  `);
});


app.post("/api/delete", (req, res) => {
  const userId = parseInt(req.body.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.send(`<p>User with ID ${userId} not found.</p><a href="/">Back to Home</a>`);
  }

  const deletedUser = users.splice(index, 1);
  res.send(`<p>User <strong>${deletedUser[0].name}</strong> deleted successfully.</p><a href="/">Back to Home</a>`);
});


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

