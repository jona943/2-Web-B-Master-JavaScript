const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: "1943",
    estado: "Disponible",
    capitulos: [], // Propiedad para almacenar la lista de capítulos del libro

    // Método para imprimir la información básica del libro en la consola
    describirLibro: function() {
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor}, en el año ${this.anio}, el estado es: ${this.estado}`)
    },

    // Método para añadir un nuevo capítulo al final de la lista de capítulos
    agregarCapitulo: function(CapituloNuevo) {
        this.capitulos.push(CapituloNuevo);
        console.log("Capitulo agregado.!")
    },

    // Método para eliminar el último capítulo de la lista
    eliminarUltimoCapitulo: function() {
        this.capitulos.pop();
        console.log("Ultimo capitulo removido.!")
    },

    // Método para eliminar el primer capítulo de la lista
    eliminarCapituloInicio: function() {
        this.capitulos.shift();
        console.log("Primer capitulo removido.!")
    },

    // Metodo para eliminar por nombre
    eliminarCapituloName: function(nombreCapitulo) {
        const i = this.capitulos.indexOf(nombreCapitulo);
        if (i !== -1) {
            this.capitulos.splice(i, 1);
            console.log(`${nombreCapitulo} Eliminado`);
        } else {
            console.log("Capitulo no encontrado")
        }

    }
};
 
// Llama al método describirLibro para mostrar la información del libro
libro.describirLibro();
console.log("-------------------------------------");

// Agrega algunos capítulos al libro para probar la función agregarCapitulo
libro.agregarCapitulo("Capitulo 1");
libro.agregarCapitulo("Capitulo 2");
libro.agregarCapitulo("Capitulo 3");
libro.agregarCapitulo("Capitulo 4");
libro.agregarCapitulo("Capitulo 5");
console.log("-------------------------------------");

// Muestra la lista de capítulos después de agregarlos
console.log(libro.capitulos);
console.log("-------------------------------------");

// Elimina el último capítulo agregado para probar eliminarUltimoCapitulo
libro.eliminarUltimoCapitulo();
// Muestra la lista de capítulos después de eliminar el último
console.log(libro.capitulos);
console.log("-------------------------------------");

// Elimina el primer capítulo de la lista para probar eliminarCapituloInicio
libro.eliminarCapituloInicio();
// Muestra la lista de capítulos después de eliminar el primero
console.log(libro.capitulos);
console.log("-------------------------------------");

// Eliminar capitulo por nombre 
libro.eliminarCapituloName("Capitulo 1"); // Error marcado segun la condicion implementada
libro.eliminarCapituloName("Capitulo 3");
// Muestra los capitulos actualizados despues de eliminar capitulo que si estaba en la lista
console.log(libro.capitulos);
