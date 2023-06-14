const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class DogController {
    async create (req, res, next) {
        try{
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        }catch(e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getAll (req, res, next) {
        try{
            const types = await Type.findAll()
            return res.json(types)
            
        }catch(e) {
            next(ApiError.internal(e.message))
        }
    }

    async check (req, res) {
        const query = req.query
        res.json(query)
    }
}

module.exports = new DogController()