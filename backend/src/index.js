require('./database')
const app = require('./app')

//https://www.youtube.com/watch?v=qf8-JzU-4IE

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));