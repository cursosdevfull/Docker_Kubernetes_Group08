const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const pathBackend2 =
  process.env.SERVICE_BACKEND2 || "http://localhost:19200/api/message";

app.use(cors());

app.get("/healthcheck", (req, res) => res.send("ok"));
app.get("/api/message", async (req, res) => {
  const responseFromBackend2 = await axios.get(pathBackend2);

  res.json({
    messageFromBackend1: "Hola desde el backend1",
    messageFromBackend2: responseFromBackend2.data,
  });
});

const PORT = process.env.PORT || 19100;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
