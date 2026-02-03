// Suma de Pares del 1 al 20

// Inicializamos una variable
let sumaPares = 0;
console.log("El valor inicial es: " + sumaPares);
console.log("----------------");


// Creamos un ciclo 'for' que recorrerá los números
for (let i = 1; i <= 20; i++) {
  // Dentro del ciclo, verificamos si el número actual (i) es par
  // Un número es par si el residuo de su división entre 2 es 0
  if (i % 2 === 0) {
    // Si el número es par, lo sumamos a nuestra variable 'sumaPares'.
    sumaPares = sumaPares + i; 
    console.log("Suma progreciva de pares: " + sumaPares)
  }
}
console.log("----------------");
//Al final del ciclo, mostramos el resultado de la suma en la consola.
console.log("La suma de los números pares del 1 al 20 es: " + sumaPares);