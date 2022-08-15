// const express = require('express')
import express from 'express'
import { join } from 'path'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'

// Setup the Directory where template files are located
// app.set('views', './views')
// app.set('views', './myviews')

// Setup the Template Engine to use
app.set('view engine', 'ejs')

// Static Files
app.use(express.static(join(process.cwd(), 'public')))

// Load Routes
app.use('/', web)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})