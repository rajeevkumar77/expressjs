import express from 'express'
import myLogger from './middlewares/logger-middleware.js'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'
import student from './routes/student.js'

// Set Template Engine
app.set('view engine', 'ejs')

// Application Level Middleware
// app.use(myLogger)
// app.use('/about', myLogger)

// Load Routes
app.use('/', web)
app.use('/', student)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})