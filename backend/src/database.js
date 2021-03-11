const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost/MEANregistro", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => comsole.error(err));
     