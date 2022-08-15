import express from 'express'
const router = express.Router()
import StudentController from '../controllers/studentController.js'

router.get('/setcookie', StudentController.set_cookie)
router.get('/getcookie', StudentController.get_cookie)
router.get('/deletecookie', StudentController.delete_cookie)


export default router