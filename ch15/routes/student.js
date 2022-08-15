import express from 'express'
const router = express.Router()
import { studentController } from '../controllers/studentController.js'
import myLogger from '../middlewares/logger-middleware.js'

// Router Level Middleware
// router.use(myLogger)
router.use('/student', myLogger)


router.get('/student', studentController)
router.get('/event', (req, res) => {
 res.send('Events')
})
router.get('/student/23', (req, res) => {
 res.send('/Student/23')
})

export default router