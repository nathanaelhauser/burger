const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'groot',
  database: 'burger_db'
})

const { getAll } = require('../controllers/burgersControllers')

module.exports = app => {

  app.get('/api/burgers', (req, res) => {
    
    getAll()
      .then(r => {
        res.json(r)
      })
      .catch(e => console.log(e))

  })

}