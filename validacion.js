const form = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const emailHelp= document.getElementById ('emailHelp')
const comentario = document.getElementById('comentario');
const nombreHelp= document.getElementById ('nombreHelp')

 form.addEventListener('submit', (event) => {
     if(email.value === "" || nombre.value ==="") {
         if(email.value==="") {
             emailHelp.innerText= "¡Por favor, completa con tu e-mail!"
         }
         if(nombre.value==="") {
            nombreHelp.innerText= "¡Por favor, completa con tu nombre!"
        }
        

     } else {
         console.log('funciona');
         form.submit();
        
     }
 })
