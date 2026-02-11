// Definición de un objeto JavaScript para representar un álbum musical.
const albumBeatles = {
  // Propiedad que almacena el título del álbum.
  titulo: "Abbey Road",
  // Propiedad que almacena el nombre del artista.
  artista: "The Beatles",
  // Propiedad que almacena el año de lanzamiento del álbum.
  año: 1969,
  // Array que contiene los nombres de las canciones del álbum.
  canciones: [
    "Octopus's Garden",
    "Here Comes the Sun",
    "Because",
    "Sun King",
    "Mean Mr. Mustard",
    "Polythene Pam",
    "She Came In Through the Bathroom Window",
    "Carry That Weight",
    "The End",
    "Her Majesty"
  ],

  // Método del objeto para mostrar información básica del álbum en consola.
  mostrarInfo: function() {
    console.log(`${this.titulo}, de ${this.artista}, lanzado en ${this.año}`)
  },

  // Nuevo método para listar todas las canciones del álbum con un número.
  listarCanciones: function() {
    console.log("\nLista de Canciones:");
    // Itera sobre el array de canciones y las imprime numeradas.
    this.canciones.forEach((cancion, index) => {
      console.log(`${index + 1}. ${cancion}`);
    });
  },

  // Método para añadir una nueva canción al final del álbum.
  agregarCancion: function(cancionNueva) {
    this.canciones.push(cancionNueva);
    console.log("Cancion agregada");
  },

  // Método para eliminar una canción del álbum por su nombre.
  eliminarCancion: function(cancionAEliminar) {
    const index = this.canciones.indexOf(cancionAEliminar);
    if (index !== -1) {
      this.canciones.splice(index, 1);
      console.log("Cancion eliminada");
    } else {
      console.log("Cancion no encontrada");
    }
  }
};


// Imprime en consola el array completo de canciones.
console.log(albumBeatles.canciones);
// Imprime en consola el título del álbum.
console.log(albumBeatles.titulo);
// Imprime en consola el artista del álbum.
console.log(albumBeatles.artista);
// Imprime en consola el año de lanzamiento del álbum.
console.log(albumBeatles.año);

// Llama al método mostrarInfo para imprimir un resumen del álbum.
albumBeatles.mostrarInfo();
// Llama al método listarCanciones para imprimir la lista numerada de temas.
albumBeatles.listarCanciones();

// Ejemplo de cómo usar el nuevo método agregarCancion.
albumBeatles.agregarCancion("The Long One");
// Vuelve a listar las canciones para ver la nueva adición.
albumBeatles.listarCanciones();

// Ejemplo de cómo usar el nuevo método eliminarCancion.
console.log("\n--- Probando eliminarCancion ---");
albumBeatles.eliminarCancion("Octopus's Garden"); // Elimina una existente
// Vuelve a listar las canciones para ver la eliminación.
albumBeatles.listarCanciones();

albumBeatles.eliminarCancion("Cancion Inexistente"); // Prueba de canción no encontrada
albumBeatles.listarCanciones(); // Para mostrar que no hubo cambios

albumBeatles.eliminarCancion("Here Comes the Sun"); // Cancion eliminidada
albumBeatles.listarCanciones();


console.log("---------------------------");

// Desestructurar - es SACAR cosas de un objeto o array SIN necesidad de escribir objeto.propiedad o array[indice]

const { canciones: cancionesDelAlbum } = albumBeatles; // Desestructura el array 'canciones' del objeto 'albumBeatles'
const [primera, segunda, tercera] = cancionesDelAlbum; // Desestructura los primeros 3 elementos del array 'cancionesDelAlbum'
console.log(primera);
console.log(segunda);
console.log(tercera);

// Desestructuración anidada: extrae el array 'canciones' y, de él, los primeros 3 elementos directamente.
const { canciones: [pista1, pista2, pista3]} = albumBeatles;
console.log(pista1);
console.log(pista2);
console.log(pista3);