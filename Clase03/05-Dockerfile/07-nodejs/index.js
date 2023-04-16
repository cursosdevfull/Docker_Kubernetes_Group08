const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const server = http.createServer(app);

server.listen(5700, () => console.log("Server is running on port 5700"));
