import express from 'express'
const router = express.Router()
import StudentController from '../controllers/studentController.js'

router.get('/examplesession', StudentController.session_example)
router.get('/getdata', StudentController.get_session_data)

export default router