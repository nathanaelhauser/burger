const { burgers } = require('../controllers')

module.exports = app => {

  // Get all burgers
  app.get('/burgers', (req, res) => {
    burgers.getAll(burgers => res.json(burgers))
  })

  // Add a burger
  app.post('/burgers', (req, res) => {
    burgers.insertOne(req.body.name, () => res.sendStatus(200))
  })

  // Update a burger
  app.put('/burgers/:id', (req, res) => {
    burgers.updateOne(parseInt(req.params.id), req.body.devoured,  () => res.sendStatus(200))
  })

  // Delete a burger
  app.delete('/burgers/:id', (req, res) => {
    burgers.deleteOne(parseInt(req.params.id), () => res.sendStatus(200))
  })
}