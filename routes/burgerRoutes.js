const { getAll, insertOne, updateOne, deleteOne } = require('../controllers')

module.exports = app => {

  // Get all burgers
  app.get('/burgers', (req, res) => {
    getAll(burgers => res.json(burgers))
  })

  // Add a burger
  app.post('/burgers', (req, res) => {
    insertOne(req.body.burger, () => res.sendStatus(200))
  })

  // Update a burger
  app.put('/burgers/:id', (req, res) => {
    updateOne(req.params.id, () => res.sendStatus(200))
  })

  // Delete a burger
  app.delete('/burgers/:id', (req, res) => {
    deleteOne(req.params.id, () => res.sendStatus(200))
  })
}