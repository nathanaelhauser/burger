const { getAll } = require('../controllers')

module.exports = app => {
  
  app.get('/', (err, data) => {
    getAll((burgers) => {
      res.render('index', { burgers })
    })
  })

}