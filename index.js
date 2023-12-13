const express = require("express");
const app = express();
const PORT = 3000;

global.DEBUG = true;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // For gathering information from forms/text inputs
require("dotenv").config();

// Get method for sample home page. In our app home page will be the welcome page, and ask users to either login or register.
app.get("/", (req, res) => {
  res.render("index");
});

// Implementing the search routes
const searchRoutes = require("./routes/search");
app.use("/search", searchRoutes);

// Implementing the search bar routes
const searchBarRoutes = require("./routes/searchBar");
app.use("/searchBar", searchBarRoutes);

// Implementing the Mongo routes
const mongoRoutes = require("./routes/mongo");
app.use("/mongo", mongoRoutes);

// Implementing the Results routes
app.get("/results", (req, res) => {
  res.render("results");
});

// Event listener for app to listen on port 3000.
app.listen(PORT, () => {
  console.log(`Search app listening at http://localhost:${PORT}`);
});
