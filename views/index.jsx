const React = require('react')
const Layout = require('./Layout')
const BurgerTable = require('./BurgerTable')
const BurgerForm = require('./BurgerForm')

module.exports = props => {
  return (
    <Layout>
      <div className="row">
        <div className="col s12 m10 l10 push-m1 push-l1">
          <BurgerForm />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6 l6">
          <BurgerTable burgers={
            props.burgers.filter(burger => !burger.devoured)
          } title="Prepared" />
        </div>
        <div className="col s12 m6 l6">
          <BurgerTable burgers={
            props.burgers.filter(burger => burger.devoured)
          } title="Devoured" />
        </div>
      </div>
    </Layout>
  )
}