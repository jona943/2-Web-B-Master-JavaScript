const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: "1943",
    estado: "Disponible",

    // Funcion Descriptiva
    describirLibro: function() {
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor}, 
            en el año ${this.anio}, el estado es: ${this.estado}`)
    }
};

libro.describirLibro();