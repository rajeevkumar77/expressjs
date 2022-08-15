import express from 'express'
import web from './routes/web.js'
import session from 'express-session'
import connectDB from "./db/connectdb.js";
import MongoStore from 'connect-mongo';
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// MongoDB Session
const sessionStorage = MongoStore.create({
  mongoUrl:DATABASE_URL,
  dbName: 'schooldb',
  collectionName:'sessions',
  ttl: 14*24*60*60,
  autoRemove:'native'
})

// Session
app.use(session({
  name:'sessiongeek',
  secret:'iamkey',
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:100000},
  store:sessionStorage
}))


// Load Routes
app.use('/', web)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})