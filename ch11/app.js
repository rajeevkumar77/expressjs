// const express = require('express')
import express from "express";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";
import web from "./routes/web.js";

// Static Files
// console.log(join(process.cwd(), 'public'))
// app.use(express.static(join(process.cwd(), 'public')))
// app.use('/static', express.static(join(process.cwd(), 'public')))
// app.use('/css', express.static(join(process.cwd(), 'public/css')))
// app.use('/js', express.static(join(process.cwd(), 'public/js')))
// app.use('/photo', express.static(join(process.cwd(), 'public/images')))

// const options = {
//  dotfiles: "deny",
//  etag: false,
//  extensions: ['htm', 'html'],
//  index: false,
//  maxAge: '1d',
//  redirect: false,
//  setHeaders: function (res, path, stat) {
//   res.set('x-timestamp', Date.now())
//  }
// }

// app.use(express.static(join(process.cwd(), 'public'), options))

// Load Routes
app.use(express.static(join(process.cwd(), "public/css")));
app.use(express.static(join(process.cwd(), "public/images")));

app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
