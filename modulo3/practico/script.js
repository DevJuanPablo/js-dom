const poster = document.getElementById('poster')
const file = poster.src

const divBlur = document.querySelector('#blur')
divBlur.style.backgroundImage = `url(${file})`

/* visualizar y ocultar el menu lateral */
const menu = document.getElementById('main-menu')
const flecha = document.getElementById('flecha')

flecha.addEventListener('click', () => {
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide')
  } else {
    menu.classList.add('hide')
  }
})