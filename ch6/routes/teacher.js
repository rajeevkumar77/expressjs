// const express = require('express')
import express from 'express'
const router = express.Router()

// All Teacher Routes
router.get('/all', (req, res) => {
 res.send('All Teacher')
})
router.post('/create', (req, res) => {
 res.send('New Teacher Created')
})
router.put('/update', (req, res) => {
 res.send('Teacher updated')
})
router.delete('/delete', (req, res) => {
 res.send('Teacher Deleted')
})

// module.exports = router
export default router