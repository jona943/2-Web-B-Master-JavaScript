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

    // Si los campos están vacíos, no hacer nada
    if (n.trim() === "" || c.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    // 1. Crear un contenedor para el comentario y el botón
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add('comment-item');

    // 2. Crear el párrafo para el texto del comentario
    const nuevoComentarioP = document.createElement("p");
    nuevoComentarioP.textContent = n + ": " + c;

    // 3. Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add('delete-button'); // Clase para estilos opcionales

    // 4. Añadir evento al botón para eliminar el comentarioDiv
    botonEliminar.addEventListener('click', function() {
        commentUser.removeChild(comentarioDiv);
    });

    // 5. Añadir el párrafo y el botón al div contenedor
    comentarioDiv.appendChild(nuevoComentarioP);
    comentarioDiv.appendChild(botonEliminar);

    // 6. Añadir el nuevo comentario a la lista de comentarios
    commentUser.appendChild(comentarioDiv);

    // 7. Limpiar los campos de texto
    nombre.value = "";
    comentario.value = "";
});
