const Router = require('express')
const router = new Router()
const animalController = require('../controllers/animalController') 
const {check} = require('express-validator')

router.get('/', (req, res) => {
    res.json({message: 'Animalshouseservice.Verion1.0.1'})
})
router.get('/animals', animalController.getAll)
router.get('/animals/:id', animalController.getOne)
router.post('/animals', [
    check('name', 'It shoul not be empty').notEmpty(),
    check('color', 'It shoul not be empty').notEmpty(),
    check('sex', 'It shoul not be empty').notEmpty(),
    check('type', 'It shoul not be empty').notEmpty(),
    check('age', 'It shoul be a number and cannot be negative').isLength({min: 1}),
], animalController.create)
router.put('/animals', animalController.update)
router.delete('/animals/:id', animalController.delete)

module.exports = router