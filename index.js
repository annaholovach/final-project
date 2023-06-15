require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'working'})
})

PORT = process.env.PORT || 7000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`working on ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()