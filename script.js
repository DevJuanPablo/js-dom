console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children

const route = document.location.href

bodyChildren[0].innerText = 'Texto Nuevo'
bodyChildren[1].children[0].innerText = route

//document.body.style.backgroundColor = 'tomato'
console.log(document.styleSheets[0])
document.styleSheets[0].cssRules[0].style.backgroundColor = 'skyblue'


const animation = () => {

  if (document.body.style.backgroundColor === 'skyblue') {
    document.body.style.backgroundColor = 'tomato'
  } else {
    document.body.style.backgroundColor = 'skyblue'
  }
}

setInterval(animation, 1000)