const { burgers } = require('../controllers')

module.exports = app => {
  
  app.get('/', (req, res) => {
    burgers.getAll((burgers) => {
      res.render('index', { burgers })
    })
  })

}