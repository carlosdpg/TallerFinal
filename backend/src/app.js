const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port', process.env.PORT || 4000);

app.use(cors( {origin: "http://localhost:4200"}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/persona", require('./routes/persona.routes.js'))
app.use("/api/ciudad", require('./routes/ciudad.routes.js'))
app.use("/api/tipodocumento", require('./routes/tipodocumento.routes.js'))

module.exports = app;