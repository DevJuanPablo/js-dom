const myForm = document.getElementById('formulario')
console.log(myForm)

// verificamos si el campo es requerido
console.log(myForm.querySelector('#password').required)

// modificamos el campo para que sea requerido
myForm.querySelector('#password').required = true