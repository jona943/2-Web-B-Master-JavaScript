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
