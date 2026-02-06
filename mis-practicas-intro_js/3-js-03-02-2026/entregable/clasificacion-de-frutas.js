let frutas = [
    "manzana", "plátano",
    "naranja", "fresa",
    "uva", "piña",
    "mango", "sandía",
    "kiwi", "pera",
    "cereza", "limón"
];

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(indice + ". " + frutas[indice]);
};

let conteo_frutas = {
    "Pomos": 0,
    "Cítricos": 0,
    "Drupas": 0,
    "Bayas": 0,
    "Infrutescencia": 0
};

// Por cada "fruta" *dentro de* "frutas", haz lo siguiente  -- of
for (const fruta of frutas) {
    if (fruta === "manzana" || fruta === "pera") {
        conteo_frutas["Pomos"]++;
    } else if (fruta === "naranja" || fruta === "limón") {
        conteo_frutas["Cítricos"]++;
    } else if (fruta === "mango" || fruta === "cereza") {
        conteo_frutas["Drupas"]++;
    } else if (fruta === "fresa" || fruta === "uva" || fruta === "plátano" || fruta === "sandía" || fruta === "kiwi") {
        conteo_frutas["Bayas"]++;
    } else { // La piña seria la unica fruta de mi arreglo que pasaria hasta el final sin una comparacion final
        conteo_frutas["Infrutescencia"]++;
    } 
};

console.log("------------------------");

console.log(conteo_frutas);

console.log("------------------------");
