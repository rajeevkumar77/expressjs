// const express = require('express')
import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";
const app = express();
const port = process.env.PORT || "3000";

app.use("/student", student);
app.use("/teacher", teacher);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
