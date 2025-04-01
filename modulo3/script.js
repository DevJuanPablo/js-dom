const inputUsuario = document.getElementById('username')
inputUsuario.onclick = clickMouse
inputUsuario.onmouseover = overMouse

function clickMouse() {
  const arts = document.getElementById('formulario')
  const p = document.createElement('p')
  p.innerHTML = "Esto fue agregado al hacer click"

  arts.appendChild(p)
}

function overMouse() {
  const arts = document.getElementById('formulario')
  const p = document.createElement('p')
  p.innerHTML = "El mouse ha pasado por encima"

  arts.appendChild(p)
}