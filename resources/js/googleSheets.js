function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzXrgyrytjFBh_4Lm2z36IGfLJxM8yVz_6aE225VDMK9uzUSBsRGBqPmHop2pY3FXNg/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Please Send to Google Sheets"
    })
}
