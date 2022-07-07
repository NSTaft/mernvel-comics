// routes/api/users.js

const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// POST /api/users
router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.post('/update', usersCtrl.update)

module.exports = router
