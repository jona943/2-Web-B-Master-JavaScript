const nombre = document.getElementById("name");
const comentario = document.getElementById("comentario");
const enviar = document.getElementById("enviar");
const commentUser = document.getElementById("commentUser");

enviar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Se clikeo el boton enviar.!!");
    console.log(nombre.value);
});

let n = nombre.value;
let c = comentario.value;

document.createElement("p");

