import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

const port = process.env.PORT || 3000;

http
  .createServer(app)
  .listen(port, () => console.log("Servidor iniciado en el puerto %s", port));
