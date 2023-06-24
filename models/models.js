const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Animal = sequelize.define('animal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}, 
    sex: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    age: {type: DataTypes.INTEGER},
});

module.exports = {Animal}
