function getCookie (name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

function darkmodeToggle () {
  const myCookie = getCookie('darkmodepref')
  console.log(myCookie)
  const darkmodebutton = document.getElementById('darkmodebutton')
  if (myCookie.includes('False')) {
    console.log('false')
    document.cookie = 'darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC'
  } else if (myCookie.includes('True')) {
    console.log('true')
    document.cookie = 'darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC'
  }
  if (darkmodebutton.innerText === 'Dark Mode') {
    darkmodebutton.innerText = 'Light Mode'
  } else {
    darkmodebutton.innerText = 'Dark Mode'
  }
  document.body.classList.toggle('darkmode')
}

function checkDarkmode() {
  const darkmodebutton = document.getElementById('darkmodebutton')
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  const myCookie = getCookie('darkmodepref')
  if (myCookie == null) {
    if (prefersDarkScheme.matches) {
      document.cookie = 'darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC'
      document.body.classList.toggle('darkmode')
      darkmodebutton.innerText = 'Light Mode'
    }
  } else if (myCookie.includes('True')) {
    document.body.classList.toggle('darkmode')
    darkmodebutton.innerText = 'Light Mode'
  } else {
    darkmodebutton.innerText = 'Dark Mode'
    document.cookie = 'darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC'
  }
}
