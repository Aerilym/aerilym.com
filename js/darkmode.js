function getCookie (name) {
  const dc = document.cookie
  const prefix = name + '='
  let begin = dc.indexOf('; ' + prefix)
  const end = null
  if (begin === -1) {
    begin = dc.indexOf(prefix)
    if (begin !== 0) return null
  } else {
    begin += 2
    let end = document.cookie.indexOf(';', begin)
    if (end === -1) {
      end = dc.length
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end))
}

function darkmodeToggle () {
  const myCookie = getCookie('darkmodepref')
  const darkmodebutton = document.getElementById('darkmodebutton')
  if (myCookie.includes('False')) {
    document.cookie = 'darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC'
    darkmodebutton.innerText = 'Light Mode'
  } else if (myCookie.includes('True')) {
    document.cookie = 'darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC'
    darkmodebutton.innerText = 'Dark Mode'
  }
  const bgcolor = document.documentElement.style.getPropertyValue('--bs-body-bg')
  console.log(bgcolor)
  if (bgcolor === '#1f2223') {
    document.documentElement.style.setProperty('--bs-body-bg', '#fff')
  } else {
    document.documentElement.style.setProperty('--bs-body-bg', '#1f2223')
  }
  // document.body.classList.toggle('darkmode')
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
