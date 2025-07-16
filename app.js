const path = require("node:path");
const express = require("express");
const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// Routing
const indexRouter = require("./routes/index.js");
app.use(indexRouter);

// Run the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
