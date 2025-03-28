console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children

const route = document.location.href

bodyChildren[0].innerText = 'Texto Nuevo'
bodyChildren[1].children[0].innerText = route

document.body.style.backgroundColor = 'tomato'