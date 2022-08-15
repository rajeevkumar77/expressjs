import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'

// Set Template Engine
app.set('view engine', 'ejs')

// Load Routes
app.use('/', web)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})