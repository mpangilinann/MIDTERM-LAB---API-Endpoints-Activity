// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Sample data
// let users = [
//   { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
//   { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
//   { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
//   { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
//   { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
//   { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 }
// ];

// // Root route → available routes + form + user list
// app.get("/", (req, res) => {
//   let userList = users.map(u => `
//     <li>
//       ${u.name} (${u.email}) — Age: ${u.age}, Salary: ${u.salary}
//       <button onclick="deleteUser(${u.id})">Delete</button>
//     </li>
//   `).join("");

//   res.send(`
//     <h1>Available Routes</h1>
//     <ul>
//       <li>GET /api/users → Returns all users</li>
//       <li>GET /api/users/:id → Returns user by ID</li>
//       <li>GET /api/users/:param1/:param2 → Displays parameters</li>
//       <li>POST /api/users → Add new user (see form below)</li>
//       <li>DELETE /api/delete/:id → Delete user by ID</li>
//     </ul>

//     <h2> Add a New User</h2>
//     <form action="/api/users" method="POST">
//       <label>Name: <input type="text" name="name" required></label><br>
//       <label>Email: <input type="email" name="email" required></label><br>
//       <label>Age: <input type="number" name="age" required></label><br>
//       <label>Salary: <input type="number" name="salary" required></label><br>
//       <button type="submit">Add User</button>
//     </form>

//     <h2> Current Users </h2>
//     <ul>${userList}</ul>

//     <script>
//       function deleteUser(id) {
//         fetch("/api/delete/" + id, { method: "DELETE" })
//           .then(res => res.json())
//           .then(data => {
//             alert(data.message);
//             location.reload(); // refresh page to update user list
//           })
//           .catch(err => console.error(err));
//       }
//     </script>
//   `);
// });

// // GET /api/users → all users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // GET /api/users/:id → user by ID
// app.get("/api/users/:id", (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// });

// // GET /api/users/:param1/:param2 → show params
// app.get("/api/users/:param1/:param2", (req, res) => {
//   res.json({ param1: req.params.param1, param2: req.params.param2 });
// });

// // POST /api/users → add new user
// app.post("/api/users", (req, res) => {
//   const newUser = {
//     id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
//     name: req.body.name,
//     email: req.body.email,
//     age: parseInt(req.body.age),
//     salary: parseInt(req.body.salary),
//   };
//   users.push(newUser);
//   res.json(newUser);
// });

// // DELETE /api/delete/:id → delete user by ID
// app.delete("/api/delete/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const index = users.findIndex(u => u.id === userId);
//   if (index === -1) return res.status(404).json({ message: "User not found" });
  
//   const deletedUser = users.splice(index, 1);
//   res.json({ message: "User deleted", user: deletedUser[0] });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });












// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Sample data
// let users = [
//   { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
//   { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
//   { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
//   { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
//   { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
//   { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 }
// ];

// // Root route → shows available routes (plain text)
// app.get("/", (req, res) => {
//   res.send(`
//     <h1>Available Routes</h1>
//     <ul>
//       <li>Root Route: Displays available routes.</li>
//       <li>GET /api/users: Returns all users.</li>
//       <li>GET /api/users/:id: Fetches a specific user by ID.</li>
//       <li>GET /api/users/:param1/:param2: Retrieves and displays parameters.</li>
//       <li>POST /api/users: Adds a new user through form submission.</li>
//       <li>DELETE /api/delete/:id: Deletes a user by ID.</li>
//     </ul>
//   `);
// });

// // GET /api/users → all users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // GET /api/users/:id → user by ID
// app.get("/api/users/:id", (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.json(user);
// });

// // GET /api/users/:param1/:param2 → show params
// app.get("/api/users/:param1/:param2", (req, res) => {
//   res.json({ param1: req.params.param1, param2: req.params.param2 });
// });

// // GET /api/users/add → form to add user
// app.get("/api/add", (req, res) => {
//   res.send(`
//     <h2>Add a New User</h2>
//     <form action="/api/users" method="POST">
//       <label>Name: <input type="text" name="name" required></label><br>
//       <label>Email: <input type="email" name="email" required></label><br>
//       <label>Age: <input type="number" name="age" required></label><br>
//       <label>Salary: <input type="number" name="salary" required></label><br>
//       <button type="submit">Add User</button>
//     </form>
//   `);
// });

// // POST /api/users → add new user
// app.post("/api/users", (req, res) => {
//   const newUser = {
//     id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
//     name: req.body.name,
//     email: req.body.email,
//     age: parseInt(req.body.age),
//     salary: parseInt(req.body.salary),
//   };
//   users.push(newUser);
//   res.json({ message: "User added successfully", user: newUser });
// });

// // GET /api/delete → show users with delete buttons
// app.get("/api/delete", (req, res) => {
//   let userList = users.map(u => `
//     <li>
//       ${u.name} (${u.email}) — Age: ${u.age}, Salary: ${u.salary}
//       <button onclick="deleteUser(${u.id})">Delete</button>
//     </li>
//   `).join("");

//   res.send(`
//     <h2>Delete a User</h2>
//     <ul>${userList}</ul>

//     <script>
//       function deleteUser(id) {
//         fetch("/api/delete/" + id, { method: "DELETE" })
//           .then(res => res.json())
//           .then(data => {
//             alert(data.message);
//             location.reload();
//           })
//           .catch(err => console.error(err));
//       }
//     </script>
//   `);
// });

// // DELETE /api/delete/:id → delete user by ID
// app.delete("/api/delete/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const index = users.findIndex(u => u.id === userId);
//   if (index === -1) return res.status(404).json({ message: "User not found" });
  
//   const deletedUser = users.splice(index, 1);
//   res.json({ message: "User deleted", user: deletedUser[0] });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });












const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample data
let users = [
  { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
  { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
  { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
  { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
  { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
  { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 }
];

// Root route → shows available routes (plain text)
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

// GET /api/users → all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET /api/users/:id → user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// GET /api/users/:param1/:param2 → show params
app.get("/api/users/:param1/:param2", (req, res) => {
  res.json({ param1: req.params.param1, param2: req.params.param2 });
});

// GET /api/add → form to add user
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

// POST /api/users → add new user
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

// GET /api/delete → form to delete user by ID
app.get("/api/delete", (req, res) => {
  res.send(`
    <h2>Delete a User</h2>
    <form action="/api/delete" method="POST">
      <label>User ID: <input type="number" name="id" required></label><br>
      <button type="submit">Delete User</button>
    </form>
  `);
});

// POST /api/delete → delete user by ID
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

