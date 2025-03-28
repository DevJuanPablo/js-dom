console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children

const route = document.location.href

bodyChildren[0].innerText = 'Texto Nuevo'
bodyChildren[1].children[0].innerText = route

//document.body.style.backgroundColor = 'tomato'
console.log(document.styleSheets[0])
document.styleSheets[0].cssRules[0].style.backgroundColor = 'skyblue'

let flag = true

const animation = () => {

  if (flag) {
    document.body.style.backgroundColor = 'skyblue'
  } else {
    document.body.style.backgroundColor = 'tomato'
  }

  flag = !flag
}

setInterval(animation, 1000)