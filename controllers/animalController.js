const {Animal} = require('../models/models')
const ApiError = require('../error/ApiError')
const {validationResult} = require('express-validator')

class AnimalController {
    async create (req, res, next) {
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Creating error'})
            }
            const {name, sex, color, type, age} = req.body
            const canditate = await Animal.create({name, sex, color, type, age})
            res.status(200).json(canditate)
        }catch(e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getAll (req, res, next) {
        try{
            const types = await Animal.findAll() 
            return res.status(200).json(types)
            
        }catch(e) {
            next(ApiError.BadRequest(e.message))
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params
            const candidate = await Animal.findOne({
                where: {id}
            });
            if(candidate === null) {
                return res.status(404).json({message: 'Not found'})
            }
            return res.status(200).json(candidate);
        }catch(e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    
    async update(req, res, next) {
        try {
            const { id, ...animal } = req.body
            const updatedAnimal = await Animal.update(animal, {
                where: { id },
                returning: true,
                new: true
            })
            if (updatedAnimal[0] === 0) {
                return res.status(404).json({ error: 'Animal not found' })
            }
            return res.status(200).json(updatedAnimal[1][0])
        } catch (error) {
            next(ApiError.internal(error.message))
        }
    }

    async delete (req, res, next) {
        try {
            const {id} = req.params
            const candidate = await Animal.destroy({
                where: {id}
            })
            if (candidate === 0) {
                return res.status(404).json({message: 'Animal not found'});
            }
            return res.status(200).json({message: 'Success'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new AnimalController()