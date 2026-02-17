let title = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");

title.addEventListener("click", function () {
    if (title.innerHTML === "¡Bienvenido a mi página!") {
        title.innerHTML = "Contenido actualizado!!";
    } else {
        title.innerHTML = "¡Bienvenido a mi página!";
    };
});

parrafo.addEventListener("click", function() {
    if (parrafo.innerHTML === "Este es el contenido inicial") {
        parrafo.innerHTML = "El contenido ha sido cambiado";
    } else {
        parrafo.innerHTML = "Este es el contenido inicial";
    };
});