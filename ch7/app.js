// Router Parameter
// const express = require('express')
import express from "express";
const app = express();
const port = process.env.PORT || "3000";

// app.get('/student/delete/:id', (req, res) => {
//  console.log(req.params)
//  res.send(`Student Deleted ${req.params.id}`)
// })

// app.get('/product/:category/:id', (req, res) => {
//  console.log(req.params)
//  res.send(`Product Category: ${req.params.category} and Product ID: ${req.params.id}`)
//  // const { category, id } = req.params
//  // res.send(`Product Category: ${category} and Product ID: ${id}`)
// })

// app.get('/product/order/:year/and/:month', (req, res) => {
//  console.log(req.params)
//  const { year, month } = req.params
//  res.send(`Year: ${year} and Month: ${month}`)
// })

// app.get('/train/:from-:to', (req, res) => {
//  console.log(req.params)
//  const { from, to } = req.params
//  res.send(`Travelling From: ${from} to: ${to}`)
// })

// app.get('/location/:state.:city', (req, res) => {
//  console.log(req.params)
//  const { state, city } = req.params
//  res.send(`State: ${state} City: ${city}`)
// })

// With Regx
// app.get('/student/:id([0-9]{2})', (req, res) => {
//  console.log(req.params)
//  res.send(`Student Deleted ${req.params.id}`)
// })

// app.get('/:type(post|article)/:id', (req, res) => {
//  console.log(req.params)
//  res.send('Post or Article')
// })

// app.param()
// app.param('id', (req, res, next, id) => {
//  console.log(`Called only Once ID: ${id}`)
//  next()
// })
// app.get('/user/:id', (req, res, next) => {
//  console.log("This is User ID Path 1")
//  next()
// })
// app.get('/user/:id', (req, res) => {
//  console.log("This is User ID Path 2")
//  res.send('Response OK')
// })

// app.param() - Array of Route Parameter
// app.param(['id', 'page'], (req, res, next, value) => {
//  console.log(`Called only Once ${value}`)
//  next()
// })
// app.get('/user/:id/:page', (req, res, next) => {
//  console.log("This is User ID Path 1")
//  next()
// })
// app.get('/user/:id/:page', (req, res) => {
//  console.log("This is User ID Path 2")
//  res.send('Response OK')
// })

// Query String
app.get("/product", (req, res) => {
  console.log(req.query);
  const { category, id } = req.query;
  res.send(`Response OK ${category} and ${id}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
