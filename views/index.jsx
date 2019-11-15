const React = require('react')
const Layout = require('./Layout')
const Burger = require('./Burger')

module.exports = props => {
  return(
    <Layout>
      {
        props.burgers.map(burger => {
          return <div>
              <Burger name={burger.name} devoured={burger.devoured}></Burger>
              <hr/>
            </div>
        })
      }
    </Layout>
  )
}