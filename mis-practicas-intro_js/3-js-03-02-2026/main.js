let i = 1;

while (i <= 10){
    console.log("while: ", i);
    i ++ 
}

let entrada = "";



console.log('Saliste ...!')
console.log("---------------------");

// Arrays

let frutas = ['manzanas', 'pera', 'uva', 'melon', 'papaya', 'mango'];

console.log(frutas[2]);

console.log(frutas.length);

for (let indice = 0; indice < frutas.length; indice++ ){
    console.log("Fruta - ", frutas[indice]);
};

console.log("Metodos de los arreglos")
let alumnos = []; // Declarados en un arreglo vacio

//metodo push , agrega al final 
alumnos.push("Ana");
alumnos.push("Darwin");
alumnos.push("Memo");
//Metodo pop quita el ultimo
alumnos.pop()
console.log(alumnos)

alumnos.unshift("Nina");
alumnos.unshift("Polo");
console.log(alumnos);


let calificaciones;

