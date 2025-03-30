const myForm = document.getElementById('formulario')
console.log(myForm)

// accede al tipo de input y cambia el tipo de input
console.log(myForm.querySelector('#username').type)
console.log(myForm.querySelector('#password').type)
myForm.querySelector('#username').type = 'email'
myForm.querySelector('#password').type = 'text'