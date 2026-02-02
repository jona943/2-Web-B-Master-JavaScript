let notaAlumno = 67;

if (notaAlumno >= 90){
    console.log("Su calificacion es: " + notaAlumno + " - Excelente");
} else if (notaAlumno >= 75 && notaAlumno <= 89){
    console.log("Su calificacion es: " + notaAlumno + " - Bien");
} else if (notaAlumno >= 60 && notaAlumno <= 74) {
    console.log("Su calificacion es: " + notaAlumno + " - Suficiente");
} else {
    console.log("Su calificacion es: " + notaAlumno + " - Reprobado");
}