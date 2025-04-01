function saludar() {
  const arts = document.getElementById('formulario')
  const p = document.createElement('p')
  p.innerHTML = "Esto fue agregado al hacer click"

  arts.appendChild(p)
}