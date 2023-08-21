const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
// MIDDLEWARE
app.use(express.json()) // req. body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(require('./config/checkToken'));
app.use(logger('dev')) // Everytime we make a request, we get a log
app.use(favicon(path.join(__dirname, 'public',"img", "logo.png")))
app.use(express.static(path.join(__dirname, "public")))
app.use('/api/items', require('./routes/api/items'))
app.use('/api/orders', require('./routes/api/orders'))
app.use('/api/users', require('./routes/api/users'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))})
module.exports = app