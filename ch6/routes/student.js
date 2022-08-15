// const express = require('express')
import express from 'express'
const router = express.Router()

// All Student Routes
router.get('/all', (req, res) => {
 res.send('All Student')
})
router.post('/create', (req, res) => {
 res.send('New Student Created')
})
router.put('/update', (req, res) => {
 res.send('Student updated')
})
router.delete('/delete', (req, res) => {
 res.send('Student Deleted')
})


// module.exports = router
export default router