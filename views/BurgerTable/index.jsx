const React = require('react')
const Burger = require('../Burger')

module.exports = props => {
  return (
    <table>
      <tr>
        <th><h1>{props.title}</h1></th>
      </tr>
      {
        props.burgers.map(burger => {
          return (
            <tr key={burger.id}>
              <td className="burger" data-burgerid={burger.id} data-devoured={burger.devoured}>
                <Burger name={burger.name} devoured={burger.devoured} burgerid={burger.id} />
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}