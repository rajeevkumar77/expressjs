// Routing
// const express = require('express')
import express from "express";
const app = express();
const port = process.env.PORT || "3000";

// Routes
// app.get('/', function (req, res) {
//  res.send('Get Method')
// })

// app.get('/', (req, res) => {
//  res.send('Get Method')
// })

// app.all('/sabkuch', (req, res) => {
//  res.send('All Method')
// })

// app.all('*', (req, res) => {
//  res.send('Page Not Found !!!')
// })

// app.all('/api/*', (req, res) => {
//  res.send('API Page')
// })

// String Path
// app.get('/about', (req, res) => {
//  res.send('About Page')
// })
// app.get('/contact', (req, res) => {
//  res.send('Contact Page')
// })

// String Pattern Path
// app.get('/ab?cd', (req, res) => {
//  res.send('This route path will match acd and abcd')
// })

// Regular Expression Path
// app.get(/a/, (req, res) => {
//  res.send('This is a')
// })

// One Callback
// app.get('/cbexample1', (req, res) => {
//  res.send('One Callback Example')
// })

// More than One Callback
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("First Callback");
//     next();

//     console.log("forth callback");
//     console.log("fifth callback");
//     console.log("sixth callback");
//   },
//   (req, res) => {
//     console.log("Second Callback");
//     res.send("More than One Callback Example");
//     console.log("third callback");
//   }
// );

// An Array of Callback
// const cb1 = (req, res, next) => {
//  console.log('First Callback')
//  next()
// }
// const cb2 = (req, res, next) => {
//  console.log('Second Callback')
//  next()
// }
// const cb3 = (req, res) => {
//  console.log('Third Callback')
//  res.send('An Array of Callback Example')
// }
// app.get('/cbexample3', [cb1, cb2, cb3])

// Combination of Independent Function and Array of Functions
// const cb1 = (req, res, next) => {
//  console.log('First Callback')
//  next()
// }
// const cb2 = (req, res, next) => {
//  console.log('Second Callback')
//  next()
// }
// app.get('/cbexample4', [cb1, cb2], (req, res, next) => {
//  console.log('Third Callback')
//  next()
// }, (req, res) => {
//  console.log('Fourth Callback')
//  res.send('Combination of Independent Function and Array of Functions')
// }
// )

// Chained Route Callback
// app.route('/student')
//  .get((req, res) => {
//   res.send('All Student')
//  })
//  .post((req, res) => {
//   res.send('Add New Student')
//  })
//  .put((req, res) => {
//   res.send('Update Student')
//  })

// app.route('/student')
//  .all((req, res, next) => {
//   console.log('First Run this for All HTTP Method')
//   next()
//  })
//  .get((req, res) => {
//   console.log('GET METHOD')
//   res.send('All Student')
//  })
//  .post((req, res) => {
//   console.log('POST METHOD')
//   res.send('Add New Student')
//  })
//  .put((req, res) => {
//   console.log('PUT METHOD')
//   res.send('Update Student')
//  })

// // Messy Code
// // All Student Routes
// app.get('/student/all', (req, res) => {
//  res.send('All Student')
// })
// app.post('/student/create', (req, res) => {
//  res.send('New Student Created')
// })
// app.put('/student/update', (req, res) => {
//  res.send('Student updated')
// })
// app.delete('/student/delete', (req, res) => {
//  res.send('Student Deleted')
// })

// // All Teacher Routes
// app.get('/teacher/all', (req, res) => {
//  res.send('All Teacher')
// })
// app.post('/teacher/create', (req, res) => {
//  res.send('New Teacher Created')
// })
// app.put('/teacher/update', (req, res) => {
//  res.send('Teacher updated')
// })
// app.delete('/teacher/delete', (req, res) => {
//  res.send('Teacher Deleted')
// })

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
