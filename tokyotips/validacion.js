const form = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const emailHelp= document.getElementById ('emailHelp')
const nombreHelp= document.getElementById ('nombreHelp')
const textarea= document.querySelector('comentario')
const cometarioHelp= document.querySelector('comentarioHelp')

 form.addEventListener('submit', (event) => {
     event.preventDefault()
     if(email.value === "" || nombre.value ==="" || comentario.value === "") {
         if(email.value==="") {
             emailHelp.innerText= "¡Por favor, completa con tu e-mail!"
         }
         if(nombre.value==="") {
            nombreHelp.innerText= "¡Por favor, completa con tu nombre!"
        }
        if(comentario.value==="") {
            comentarioHelp.innerText= "Este campo no puede quedar vacío."
        }

     } else {
         console.log('funciona');
    
         form.submit();
        
     }
 })
