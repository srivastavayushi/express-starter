const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");

// Init express
const app = express();

// Create your endpoints/route handlers
// app.get("/", (req, res) => {
// res.send("<h1>Hello World!!!!</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Init Middleware
// app.use(logger);

// Creating Route

// This route gets all members
app.get("/api/members", (req, res) => res.json(members));

// Get Single Member

app.get("./api/members/:id", (req, res) => {
  res.json(members.filter((member) => member.id === req.params.id));
});
// Set a STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
// Listen on a port
app.listen(PORT, () => console.log("server running on PORT 5000"));
