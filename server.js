require('dotenv').config()
require('./config/database')

const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
const app = require('./app-server')

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is hanging high'))

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We in the building.`)
})

