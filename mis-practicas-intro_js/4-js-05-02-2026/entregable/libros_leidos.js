let librosLeidos = [];

const agregarLibro = (titulo) => { 
    librosLeidos.push(titulo); 
};

// console.log(librosLeidos); // Antes de llamar a la funcion

agregarLibro("Deja de ser tu - Joe Dispenza");
agregarLibro("La Inteligencia Emocional - Daniel Goleman");
agregarLibro("Si lo crees lo creas - Bryan Tracy")

// console.log(librosLeidos); // Despues de llamar a la funcion

function mostrarLibrosLeidos(){
    if (librosLeidos.length <= 0){
        console.log("No haz leido ningun libro");
    } else {
        for (let i = 0; i < librosLeidos.length; i++){
            console.log(i + 1, librosLeidos[i]);
        };
    };
}

mostrarLibrosLeidos();

function sumar(a, b) {
    a + b;
};

console.log(sumar(5, 5));