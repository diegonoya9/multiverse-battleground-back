const express = require('express')
const router = express.Router()
const apiControllers = require('../controllers/apiControllers')

router.get('/allusers', apiControllers.getAllUsers)
router.get('/allusers/:user_id', apiControllers.getAllUsers)
router.get('/allfighters', apiControllers.getAllFighters)
router.get('/alluserfighters', apiControllers.getAllUserFighters)
router.get('/alluserfighters/:user_id', apiControllers.getAllUserFighters)
router.get('/allobjects', apiControllers.getAllObjects)
router.get('/alluserobjects/:user_id', apiControllers.getAllUserObjects)
router.get('/allfighterlevels', apiControllers.getAllFighterLevels)
router.get('/allmoves', apiControllers.getAllMoves)
router.get('/allfightermoves', apiControllers.getAllFighterMoves)
router.get('/createfighterlevels', apiControllers.createFighterLevels)
router.post('/buyObject', apiControllers.buyObject)
router.post('/buyFighter', apiControllers.buyFighter)
router.post('/addtoparty', apiControllers.addToParty)
router.post('/updatefighter', apiControllers.updateFighter)
router.post('/updateusermoney', apiControllers.updateUserMoney)
router.post('/removefromparty', apiControllers.removeFromParty)
router.post('/setfirstfighter', apiControllers.setFirstFighter)
router.get('/', (req, res) => {
    res.send('running app..')
})

//router.get('/crearuno', apiControllers.createUser)

module.exports = router