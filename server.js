const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname + "/admin/index.html"));
  });

  server.get("/config.yml", (req, res) => {
    res.sendFile(path.join(__dirname + "/admin/config.yml"));
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("Server ready on http://localhost:3000");
  });
});
