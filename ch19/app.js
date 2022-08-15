import express from "express";
import connectDB from "./db/connectdb.js";
import { createDoc, createMultiDoc } from "./models/Student.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// Create and Save Document
createDoc();
// createDoc('Sumit', 29, 8666.45, ['Gaming', 'Dancing'], false, [{ value: 'This is bad' }])
// createMultiDoc()

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
