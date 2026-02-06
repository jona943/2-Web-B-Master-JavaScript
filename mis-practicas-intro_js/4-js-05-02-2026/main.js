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