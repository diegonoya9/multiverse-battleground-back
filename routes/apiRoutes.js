const express = require('express')
const router = express.Router()
const apiControllers = require('../controllers/apiControllers')

router.get('/allusers', apiControllers.getAllUsers)
router.get('/allfighters', apiControllers.getAllFighters)
router.get('/alluserfighters', apiControllers.getAllUserFighters)
router.get('/allobjects', apiControllers.getAllObjects)
router.get('/alluserobjects', apiControllers.getAllUserObjects)
router.get('/allfighterlevels', apiControllers.getAllFighterLevels)

//router.get('/crearuno', apiControllers.createUser)

module.exports = router