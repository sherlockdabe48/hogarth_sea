const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

// Here we need a way to send your static files to the client. This can be achieved with a reverse proxy like Nginx, or simply using express.static().
// Put all your “static” (css, js, images) files in a folder dedicated to it, different from where you put your “views” (html files in your case).
// I’ll call it static for the example. Once it’s done, add this line in your server code:
app.use("/static", express.static("./static/"));

app.get("/", function (req, res) {
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
});
