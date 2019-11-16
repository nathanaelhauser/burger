document.addEventListener('click', e => {

  if (e.target.id === `burger-btn`) {
    e.preventDefault()

    axios.post('/burgers', {
      name: document.querySelector('#burger-name').value
    })
      .then(_ => window.location.reload())
      .catch(e => console.error(e))
  }

  if (e.target.className === 'burger') {
    axios.put(`/burgers/${e.target.dataset.burgerid}`, 
      { devoured: parseInt(e.target.dataset.devoured) ? 0 : 1 })
      .then(_ => window.location.reload())
      .catch(e => console.error(e))
  }

})