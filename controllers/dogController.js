const {Dog} = require('../models/models')
const ApiError = require('../error/ApiError')
const {validationResult} = require('express-validator')

class DogController {
    async createDog (req, res, next) {
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Creating error'})
            }
            const {name, color, tail_length, weight} = req.body
            const type = await Dog.create({name, color, tail_length, weight})
            return res.json(type)
        }catch(e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getAll (req, res, next) {
        try{
            const types = await Dog.findAll() 
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