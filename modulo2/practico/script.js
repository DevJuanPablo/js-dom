const poster = document.getElementById('poster')
const file = poster.src

const divBlur = document.querySelector('#blur')
divBlur.style.backgroundImage = `url(${file})`
