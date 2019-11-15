document.addEventListener('click', e => {
  console.log(e.target)
  if (e.target.className === 'burger') {
    console.log('burger clicked')
    // axios.put(`/burgers/${e.target.dataset.burgerid}`, 
    //   { devoured: parseInt(e.target.dataset.devoured) })
    //   .then(_ => window.location.reload())
    //   .catch(e => console.error(e))
  }

})