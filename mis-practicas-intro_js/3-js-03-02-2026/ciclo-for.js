/*
Ejemplo 1: Ciclo for
Aquí tienes un ejemplo completo que imprime los números 
del 0 al 9:

*/

for (let ii = 0; ii < 10; ii++) {

    console.log(ii);

}

// -------------------------------------
console.log("-------------------------------")
/*
Ejemplo 2: Sumar números en un rango

Supongamos que queremos calcular la suma de los números 
del 1 al 10.
*/

let suma = 0;
console.log(suma); // Impresion del valor inicial de la variable suma

for (let i = 1; i <= 10; i++) {
    suma += i; // Sumar el número actual a la suma total
    console.log(i); // Impresion visual del contador 
    console.log("El resultado de la suma es: " + suma); // Impresion del resultado de la suma
}

console.log("El total de toda la suma es: " + suma); // Imprime: 55