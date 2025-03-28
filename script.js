console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children

const route = document.location.href

bodyChildren[0].innerText = 'Texto Nuevo'
bodyChildren[1].children[0].innerText = route

//document.body.style.backgroundColor = 'tomato'
console.log(document.styleSheets[0])
document.styleSheets[0].cssRules[0].style.backgroundColor = 'black'
document.styleSheets[0].cssRules[1].style.color = 'yellow'