// Paso 1) Seleccionar mis elementos quen voy a ocupar

let itemInput = document.getElementById("itemInput");
let addItemButtom = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

// paso 2 ) Crear mi funcion 
function addItemButtomClick(){
    let itemInput = itemInput.value;

    let newItem = document.createElement("li");

    // Crear un elemento span 
    let textSpan = document.createElement("span");
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan);

    // Crear el boton eliminar
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function(){
        newItem.remove();
    });

    newItem.appendChild(deleteButton);
    itemList.appendChild(newItem);
    itemInput.value = '';
}

// Paso 3) Agergamos el evento escuchar click y le asignamos nuetra funcion que creamos

addItemButtom.addEventListener('click', addItemButtomClick);