// const express = require('express')
// const stu = require('./routes/student.js')
// const tea = require('./routes/teacher.js')

import express from "express";
import stu from "./routes/student.js";
import teacher from "./routes/teacher.js";
import user from "./routes/user.js";

const app = express();
const port = process.env.PORT || "3000";

// Load Router Modules
app.use("/student", stu);
app.use("/teacher", teacher);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
