// Mis constantes
const nombre = document.getElementById("name");
const comentario = document.getElementById("comentario");
const enviar = document.getElementById("enviar");
const commentUser = document.getElementById("commentUser");

// Accion del boton enviar
enviar.addEventListener("click", function (event) {
    event.preventDefault();
    // Obtengo los valores de los text area en una variable n - c
    let n = nombre.value;
    let c = comentario.value;
    // Creo un nuevo elemento en html tipo parrafo en una constante
    const nuevoComentario = document.createElement("p");
    // Se asigana el texto del usuario
    nuevoComentario.textContent = n + ": " + c;
    // Añade el nuevo elemento a la pagimagit
    commentUser.appendChild(nuevoComentario);
});



