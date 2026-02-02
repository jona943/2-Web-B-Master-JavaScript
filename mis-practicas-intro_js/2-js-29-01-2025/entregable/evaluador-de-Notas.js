// Variable declara con un valor asignado 
let notaAlumno = 76;

// Primer validacion para verificar si la nota es valida
if (notaAlumno > 0 && notaAlumno < 101) {
    // Evaluacion de nota con las condiciones planteadas
    if (notaAlumno >= 90) {
        console.log("Su calificacion es: " + notaAlumno + " - Excelente");
    } else if (notaAlumno >= 75 && notaAlumno <= 89) {
        console.log("Su calificacion es: " + notaAlumno + " - Bien");
    } else if (notaAlumno >= 60 && notaAlumno <= 74) {
        console.log("Su calificacion es: " + notaAlumno + " - Suficiente");
    } else {
        console.log("Su calificacion es: " + notaAlumno + " - Reprobado");
    }
} else {
    // Mesaje en caso de que la nota no sea valida
    console.log("Por favor introduce una nota valida (mayor a 0 y menor que 101).")
}
