// First Express JS Application
// const express = require('express')
import express from "express"; // ES6 Syntax
const app = express();
const port = process.env.PORT || "3000";

// app.get('/', function (req, res) {
//  res.send('Hello World !')
// })

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
