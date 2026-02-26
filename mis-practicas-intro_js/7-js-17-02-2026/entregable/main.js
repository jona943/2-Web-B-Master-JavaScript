// Elementos del DOM
const slider = document.getElementById('longitudSlider');
const valorLongitud = document.getElementById('valorLongitud');
const btnGenerar = document.getElementById('btnGenerar');
const passwordDisplay = document.getElementById('passwordText');
const btnCopiar = document.querySelector('.copiar');

// Checkboxes de opciones
const checkMinus = document.getElementById('minusculas');
const checkMayus = document.getElementById('mayusculas');
const checkNums = document.getElementById('numeros');
const checkSyms = document.getElementById('simbolos');

// Diccionarios de caracteres
const CARACTERES = {
    min: 'abcdefghijklmnopqrstuvwxyz',
    may: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    num: '0123456789',
    sym: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Sincronizar el Slider con el texto
slider.oninput = () => valorLongitud.textContent = slider.value;

// Función principal de generación
function generarPassword() {
    let caracteresPermitidos = '';
    let password = '';

    // Agregamos a los permitidos según lo que esté marcado
    if (checkMinus.checked) caracteresPermitidos += CARACTERES.min;
    if (checkMayus.checked) caracteresPermitidos += CARACTERES.may;
    if (checkNums.checked) caracteresPermitidos += CARACTERES.num;
    if (checkSyms.checked) caracteresPermitidos += CARACTERES.sym;

    if (!caracteresPermitidos) return alert('¡Selecciona al menos un tipo de caracter!');

    // Algoritmo de selección aleatoria
    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        password += caracteresPermitidos[randomIndex];
    } // Una vez recorrido el tamano de caracteres permitidos se guarda en una variable

    passwordDisplay.textContent = password; // Asignacion de valor
    passwordDisplay.style.opacity = '1'; // Modificacion de opacidad para mostar el password nuevo
}

// Función para copiar al portapapeles con mensaje
async function copiarPassword() {
    const texto = passwordDisplay.textContent;
    if (texto === 'P4$sw0rd!' || texto === '') return;
    try {
        await navigator.clipboard.writeText(texto);
        alert('¡Contraseña copiada!');
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}

// Eventos de escucha tipo click
btnGenerar.addEventListener('click', generarPassword);
btnCopiar.addEventListener('click', copiarPassword);
