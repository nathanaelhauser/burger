// selectAll()
// insertOne()
// updateOne()

const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'groot',
  database: 'burger_db'
})

module.exports = {

  async getAll() {
    const response = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM burgers', (e, data) => {
        if (e) {
          console.log(e)
        }
        resolve(data)
      })
    })

    return response
  },

}