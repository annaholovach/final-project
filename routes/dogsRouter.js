const Router = require('express')
const router = new Router()
const dogController = require('../controllers/dogController') 

router.post('/dog', dogController.create)
router.get('/dogs', dogController.getAll)
// router.get('/dogs', dogController.check)
router.get('/ping', (req, res) => {
    res.json({message: 'Dogshouseservice.Verion1.0.1'})
})

module.exports = router