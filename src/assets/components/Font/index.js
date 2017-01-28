//import style from './style.css'

function setFont() {

  // For storage only
  if (typeof(Storage) === 'undefined') {
    return
  }
  if (localStorage.getItem('varya.me.fonts') === null) {
    var request = new Request('/assets/font.css', {
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
   });
    fetch(request)
      .then((response)=> {
        return response.text()
      })
      .then((data) => {
        localStorage.setItem('varya.me.fonts', data)
      })
  }

}

setFont()
