const db = require('../connection')

module.exports = {

  getAll(cb) {
    db.query('SELECT * FROM burgers', (e, burgers) => {
      if (e) {
        console.log(e)
      }
      cb(burgers)
    })
  },

  insertOne(burger, cb) {
    db.query('INSERT INTO burgers(name) VALUES (?)', [burger], (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  },

  updateOne(id, devoured, cb) {
    db.query(`UPDATE burgers SET devoured = "${devoured}" WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })

  },

  deleteOne(id, cb) {
    db.query(`DELTE FROM burgers WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err)
      }
      cb()
    })
  }

}