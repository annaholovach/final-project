const {Animal} = require('../models/models')
const ApiError = require('../error/ApiError')
const {validationResult} = require('express-validator')
import {AnimalServise} from '../services/animalService'

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
            next(ApiError.internal(e.message))
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params
            const candidate = await Animal.findOne({
                where: {id}
            });
            return res.status(200).json(candidate);
        }catch(e) {
            next(ApiError.internal(e.message))
        }
    }

    async update (req, res, next) {
        try {
            const {} = req.body;
            const updatedAnimal = await Animal.update({
                where: {name, sex, color, type, age}
            })
            return res.status(200).json(updatedAnimal);
        } catch (e) {
            next(ApiError.internal(e.message))
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