const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const PORT = 8000 || process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

io.on("connection", (client) => {
  console.log("New User Connected", client.id);
});

server.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
