function saludar(Nombre){ // Nombre es un parametro
    // La accion a ejecutar si se llama a la funcion 
    return 'Hola ' + Nombre; // Retornando el resultado
}

saludar('Jonathan'); // LLamando a la funcion saludar

let saludo = saludar('Florencio');

console.log(saludar('Jona'));
console.log(saludo);

console.log('-----------------------------------');

console.log("Funcion para sumar dos numeros");
function sumar(a,b){
    console.log("La suma de ", a," y ", b, " es: ", a + b); 
    // El resultado solo se imprime en consola
}

sumar(1,8); 

console.log('-----------------------------------');

console.log("Funcion para restar dos numeros");
// return entrega un valor para usarlo despues 
function restar(num1, num2){
    let resultado = num1 - num2;
    return resultado; // Esta variable es local y solo es acceible desde dentro de la funcion
}

console.log(restar(10,7));

console.log('-----------------------------------');

let resultado; // Variable global 
console.log(resultado); // Undefined

function sinReturn(){
    let x = 5;
}
// Se ejecuta la funcion pero NO regresa nada 
console.log(sinReturn()) // undefined

function multiplicar(dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)) // NaN
// Devuelve Not A Number (NaN), hace falta un argumento

console.log('-----------------------------------');

// Arrow function - Funcion de flecha 
console.log("-------------Funcion con flecha------------->")

const dividir = (a, b) => a/b; // return automatico 

console.log(dividir(36,4));

const suma = (a,b) => { // ----->
    // Una funcion mas larga con {} no tiene return automatico
    return a + b;
}

console.log(suma(5, 8));

const multi = (a,b) => {return a * b}

console.log(multi(85,6));

console.log('-----------------------------------');
console.log("Funciones anonimas");

// No es necesario darles un nombre ya que ejecunta algo puntual
// Callbacks

setTimeout(function () {
    console.log("Este es un mensaje que se ejecuta despues....")
    
}, 5000);

// CUANDO NO UTILIZAR FUNCIONES ANONIMAS 
/*Se tiene que reutilizar muchas veces 
Tiene logica grande
Necesita ser testeada
Se necesita claridad */


function mascotas(a,b,c){
    console.log("Nombres de las mascotas: ",  a + b + c)
}

mascotas('Puppy ', 'Bombon '); // El elemento c esta indefinido


