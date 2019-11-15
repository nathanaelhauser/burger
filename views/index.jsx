const React = require('react')
const Layout = require('./Layout')
const BurgerTable = require('./BurgerTable')
const BurgerForm = require('./BurgerForm')

module.exports = props => {
  return (
    <Layout>
      <div className="row">
        <div className="col s10">
          <div className="row">
            <div className="col s12">
              <BurgerForm />
            </div>
          </div>
          <div className="row">
            <div className="col s5">
              <BurgerTable burgers={
                props.burgers.filter(burger => !burger.devoured)
              } title="Prepared" />
            </div>
            <div className="col s5">
              <BurgerTable burgers={
                props.burgers.filter(burger => burger.devoured)
              } title="Devoured" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}