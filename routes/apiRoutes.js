const express = require('express')
const router = express.Router()
const apiControllers = require('../controllers/apiControllers')

router.get('/allusers', apiControllers.getAllUsers)
router.get('/allusers/:user_id', apiControllers.getAllUsers)
router.get('/allfighters', apiControllers.getAllFighters)
router.get('/alluserfighters', apiControllers.getAllUserFighters)
router.get('/allobjects', apiControllers.getAllObjects)
router.get('/alluserobjects/:user_id', apiControllers.getAllUserObjects)
router.get('/allfighterlevels', apiControllers.getAllFighterLevels)
router.get('/createfighterlevels', apiControllers.createFighterLevels)
router.get('/', (req, res) => {
    res.send('running app..')
})

//router.get('/crearuno', apiControllers.createUser)

module.exports = router