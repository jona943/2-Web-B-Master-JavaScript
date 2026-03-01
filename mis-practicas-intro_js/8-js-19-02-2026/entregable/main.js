// Selección de elementos del DOM para la funcionalidad de reseñas

// Inputs del formulario
const inputNombre = document.getElementById('nombreUsuario');
const selectLibro = document.getElementById('libroSeleccionado');
const areaNuevoComentario = document.getElementById('nuevoComentario');
const botonEnviarComentario = document.getElementById('enviarComentario');

// Contenedores de visualización
const contenedorComentarios = document.getElementById('comentariosPublicados');
const mensajeVacio = document.getElementById('mensajeVacio');
// Estos son los únicos elementos que necesito para:
// - Capturar los datos del usuario.
// - Escuchar el evento de click en el botón.
// - Insertar los nuevos comentarios en la lista.
// - Ocultar el mensaje de "No hay reseñas".

/* Función principal */
function agregarComentario() {
    // Capturamos los valores actuales de los inputs
    const nombre = inputNombre.value.trim(); //trim es para quitar los espacios
    const libro = selectLibro.value; 
    const comentario = areaNuevoComentario.value.trim();

    // Validación: No permitir campos vacíos
    if (nombre === "" || comentario === "") { //  Comparacion OR no se cumple si ambos no estan vacios
        alert("Por favor, completa tu nombre y escribe un comentario."); // La condicion se cumple si los dos campos o uno estan vacio
        return;
    }

    // Ocultar el mensaje de "Sé el primero en escribir una reseña" si es el primer comentario
    if (mensajeVacio) {
        mensajeVacio.style.display = 'none'; // none oculta el contenido pero el elemto p persiste
    }

    // Crear el elemento de la nueva reseña
    const nuevaResena = document.createElement('div');
    nuevaResena.classList.add('comentario-card'); // Se agrega clase .comentario-card
   
    // Se inserta html directamente con innerHTML
    nuevaResena.innerHTML = `
        <h4>${nombre} opina sobre "${libro}":</h4> 
        <p>${comentario}</p> <!-- Concatenacion con etiqueta <p> con el nuevo valor-->
    `;

    // Agregar la reseña al contenedor hijo con appendChild
    contenedorComentarios.appendChild(nuevaResena);

    // Limpia el formulario para la siguiente reseña
    inputNombre.value = ""; // Reset necesario
    areaNuevoComentario.value = "";
    selectLibro.selectedIndex = 0;
}

// En la escucha del evento click del botón para ejecutar la función
botonEnviarComentario.addEventListener('click', agregarComentario);
