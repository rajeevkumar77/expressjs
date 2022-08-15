import express from 'express'
// const mongoose = require('mongoose');
// import mongoose from 'mongoose';
import connectDB from './db/connectdb.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"


// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//  console.log('Connected Successfully..')
// })

connectDB(DATABASE_URL)



app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})