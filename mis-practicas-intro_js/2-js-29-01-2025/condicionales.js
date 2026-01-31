let edad = 20;
let tieneINE = false;

//Condicion que queremos que se cumpla 
if (edad >= 18){
    console.log("Eres lo bastate grande"); // Se ejecuta solo si es true
}else {
    console.log("Eres muy pequeño o pequeña..!"); // Se ejecuta solo si es false
};

let calificacion = 9;

if(calificacion >= 9){
    console.log("Eres increible..!");
} else if (calificacion >= 6){
    console.log("Panzaste..!");
} else {
    console.log("Reprobado");
};

// AND (y) &&
// OR (o) ||
// NOT (negacion)

if (edad >= 18 && tieneINE){
    console.log("Puedes Votar");
} else {
    console.log("No puedes Votar");
}