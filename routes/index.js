const Router = require('express')
const router = new Router()
const animalsRouter = require('./animalsRouter')

router.use('/home', animalsRouter)


module.exports = router