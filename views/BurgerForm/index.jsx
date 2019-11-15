const React = require('react')

module.exports = props => {
  return (
    <form>
      <div class="input-field row">
        <input id="burgerName" type="text" class="validate" id="burger-name" />
        <label for="burgerName">Burger</label>
      </div>
      <div className="row">
        <button id="burger-btn" class="waves-effect waves-light btn">Prepare</button>
      </div>
    </form>
  )
}