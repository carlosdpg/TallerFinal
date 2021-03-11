const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'))

app.use("/api/persona", require('./routes/persona.routes.js'))
app.use("/api/ciudad", require('./routes/ciudad.routes.js'))
app.use("/api/tipodocumento", require('./routes/tipodocumento.routes.js'))

module.exports = app;