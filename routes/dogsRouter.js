const Router = require('express')
const router = new Router()
const dogController = require('../controllers/dogController') 
const {check} = require('express-validator')

router.post('/dog', [
    check('name', 'It shoul not be empty').notEmpty(),
    check('color', 'It shoul not be empty').notEmpty(),
    check('tail_length', 'It shoul be a number and cannot be negative').isLength({min: 1}),
    check('weight', 'It shoul be a number and cannot be negative').isLength({min: 1}),
], dogController.createDog)
router.get('/dogs', dogController.getAll)
router.get('/ping', (req, res) => {
    res.json({message: 'Dogshouseservice.Verion1.0.1'})
})

module.exports = router