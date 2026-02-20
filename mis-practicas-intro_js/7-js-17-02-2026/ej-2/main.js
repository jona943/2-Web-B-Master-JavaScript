// Cambiar texto de párrafo oculto
const hiddenElement = document.querySelector(".hidden");
hiddenElement.textContent = "Texto revelado";
console.log(hiddenElement);

// Mostrar texto visible
const container = document.querySelector(".container");
console.log(container.innerText);

// Reemplazar etiqueta completa
const replaceElement = document.querySelector(".replace");
replaceElement.outerText = "Etiqueta reemplazada";