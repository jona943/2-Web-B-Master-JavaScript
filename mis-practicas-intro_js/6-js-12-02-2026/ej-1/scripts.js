// --- Selección de elementos del DOM ---

// Selecciona el elemento H1 con el ID "titulo"
let title = document.getElementById("titulo");

// Selecciona el elemento P con el ID "parrafo"
let parrafo = document.getElementById("parrafo");

// Selecciona el botón con el ID "cambiarContenido"
let contenido = document.getElementById("cambiarContenido");


// --- Event Listeners para interacción del usuario ---

// Agrega un "escuchador de eventos" al elemento H1
// Cuando se haga clic en el H1, se ejecutará la función
title.addEventListener("click", function () {
    // Comprueba si el contenido actual del H1 es el mensaje inicial
    if (title.innerHTML === "¡Bienvenido a mi página!") {
        // Si es el inicial, lo cambia a "Contenido actualizado!!"
        title.innerHTML = "Contenido actualizado!!";
    } else {
        // Si no es el inicial, lo vuelve al mensaje original
        title.innerHTML = "¡Bienvenido a mi página!";
    };
});

// Agrega un "escuchador de eventos" al elemento P
// Cuando se haga clic en el P, se ejecutará la función
parrafo.addEventListener("click", function() {
    // Comprueba si el contenido actual del P es el mensaje inicial
    if (parrafo.innerHTML === "Este es el contenido inicial") {
        // Si es el inicial, lo cambia a "El contenido ha sido cambiado"
        parrafo.innerHTML = "El contenido ha sido cambiado";
    } else {
        // Si no es el inicial, lo vuelve al mensaje original
        parrafo.innerHTML = "Este es el contenido inicial";
    };
});

// Agrega un "escuchador de eventos" al botón "cambiarContenido"
// Cuando se haga clic en el botón, se ejecutará la función
contenido.addEventListener("click", function(){
    // Comprueba si el H1 o el P están en su estado inicial
    if (title.innerHTML === "¡Bienvenido a mi página!" || parrafo.innerHTML === "Este es el contenido inicial"){
        // Si al menos uno está en estado inicial, actualiza ambos con mensajes del botón
        title.innerHTML = "Contenido actualizado desde el boton..!!";
        parrafo.innerHTML = "El contenido ha sido cambiado con el boton..!";
    } else {
        // Si ambos ya han sido modificados, los vuelve a sus estados iniciales
        title.innerHTML = "¡Bienvenido a mi página!";
        parrafo.innerHTML = "Este es el contenido inicial";
    };
});
