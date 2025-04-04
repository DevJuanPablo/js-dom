function hideElement(ev) {
  const element = ev.target

  element.style.display = 'none'
}

document.body.addEventListener('click', hideElement)