let frutas = ["Platano", "Fresa", "kiwi", "Mango"];

for (let i = 0; i < frutas.length; i++) {
    console.log(i + ". " + frutas[i]);
};

console.log("----------------------");

/* Ejercicio Práctico
1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); // Imprime: verde

3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'

4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');

5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();

console.log(colores); // Muestra el array modificado

 */

let colores = ['Naranja', 'Azul', 'Violeta', 'Negro', "Verde"];
console.log(colores[1]); // Imprime: verde (En mi caso Azul)

colores[2] = 'Cafe'; // Cambia 'azul' a 'naranja' (En mi caso ´Violeta´ por ´Cafe´)
console.log(colores);

colores.push('Rojo');
console.log(colores);

colores.shift();
console.log(colores); // Muestra el array modificado (En mi caso quita el color 'Naranja')



