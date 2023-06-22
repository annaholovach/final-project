const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Dog = sequelize.define('dog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}, 
    color: {type: DataTypes.STRING},
    tail_length: {type: DataTypes.INTEGER},
    weight: {type: DataTypes.INTEGER},
});

module.exports = {Dog}
