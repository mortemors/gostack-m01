const express = require("express");

const server = express();

server.use(express.json());

const users = ["Diego", "Robson", "Victor"];

//Lista todos
server.get("/users", (req, res) => {
  return res.json(users);
});

//Lista um
server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

//Adiciona
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

//Atualiza
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

//Deleta
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
