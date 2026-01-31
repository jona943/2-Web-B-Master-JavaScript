let mascota = 'perro'; // NO se puede redeclarar una variable on el mismo nombre con let
let mascota1 = 'gato'; // Se opta por otro nombre para no sobre escribir

const numero = 23;  //  const es un variable que es inmutable

let num1 = 5;
let num2 = 12;

console.log("Operadores matematicos")
let sumas = num1 + num2;  // OPeracion de variables 
let resta = num2 - num1;
let modulo = num1 % num2;
let exp = num1 ** num2; // Operador exponencial **


console.log(sumas); // Impresion del valor de una variable que suma otras variables
console.log(15+15);
console.log(resta);
console.log("La respuesta es: " + modulo); // Concatenacion
console.log(exp);

console.log(num1*num2);
console.log(num2/num1);

console.log("Operadores logicos");
//Comparaciones simples
console.log(num1 == num2);  // Comparacion de valores da una salida boleana
console.log(17 == 17);
console.log(12 == '12');


// Comparacion estricta, triple igual
console.log( 23 === '23');  // Tambien compara el tipo de dato de ambas variables o datos a comparar

console.log("---------------------------");
let valor1 = 50;
let valor2 = 80;

// Mayor que 
console.log(valor1 > valor2);
// Mayor o igual que
console.log(valor1 >= valor2);
// Menor que 
console.log(valor1 < valor2);
// Menor o igual que
console.log(valor1 <= valor2);
// Distinto que 
console.log(10 != '10');
// Distinto que estricto
console.log(10 !== '10');
 
// |-------------------------------------------|

// Operadores combinados 
valor1 = valor1 + 3;
valor1 += 4; // Simplificacion 
valor1 += 6;

valor2 = valor2 - 8;
valor2 -= 8;
valor2 -= 3;


console.log(valor1);

// El modulo % devuelve el restante de una division 
// a % b 

console.log(8 % 2);