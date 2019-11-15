const React = require('react')

module.exports = props => {
  return (
    <div>
      <h3>Burger</h3>
      <p>Name: {props.name}</p>
      <p>Devoured: {props.devoured ? 'Yes' : 'No'}</p>
    </div>
  )
}