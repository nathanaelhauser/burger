const React = require('react')

module.exports = props => {
  return (
    <div className="burger">
      <h4>{props.name}</h4>
      <p>Devoured: {props.devoured ? 'Yes' : 'No'}</p>
    </div>
  )
}