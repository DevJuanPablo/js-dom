const inputUsuario = document.getElementById('username')
inputUsuario.addEventListener('click', () => {
  const arts = document.getElementById('formulario')
  const p = document.createElement('p')
  p.innerHTML = "Esto fue agregado al hacer click"

  arts.appendChild(p)
})

inputUsuario.addEventListener('mouseover', overMouse)

function overMouse() {
  const arts = document.getElementById('formulario')
  const p = document.createElement('p')
  p.innerHTML = "El mouse ha pasado por encima"

  arts.appendChild(p)
}