const { getAll, insertOne, updateOne } = require('../controllers')

module.exports = app => {

  // Get all burgers
  app.get('/burgers', (req, res) => {
    getAll()
      .then(r => {
        res.json(r)
      })
      .catch(e => console.log(e))
  })


  // Add a burger
  app.post('/burgers', (req, res) => {
    
  })

  // Update a burger
  app.put('/burgers', (req, res) => {
    
  })

  // Delete a burger

}