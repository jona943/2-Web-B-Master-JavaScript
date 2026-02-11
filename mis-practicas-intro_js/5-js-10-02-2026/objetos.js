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