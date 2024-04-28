const express = require('express')
const userrouter = express.Router()
const {loginUser, getMe, registerAUser} = require('../controllers/userController')

const {protect} = require('../middlewares/authMiddleware')

userrouter.post('/register', registerAUser)
userrouter.post('/login', loginUser)
userrouter.get('/me', getMe)
// userrouter.update('/update',updateUser)

module.exports = userrouter

