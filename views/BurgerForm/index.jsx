const React = require('react')

module.exports = props => {
  return (
    <form>
      <div className="input-field row">
        <input id="burgerName" type="text" className="validate" id="burger-name" />
        <label htmlFor="burgerName">Burger</label>
      </div>
      <div className="row">
        <button id="burger-btn" className="waves-effect waves-light btn">Prepare</button>
      </div>
    </form>
  )
}