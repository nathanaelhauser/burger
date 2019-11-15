const { join } = require('path')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('views', join(__dirname, 'views'))
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')

require('./routes/burgerRoutes')(app)

app.listen(3000, () => console.log('Listening on port 3000'))