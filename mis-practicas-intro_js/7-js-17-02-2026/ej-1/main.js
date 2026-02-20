const element = document.querySelector(".container");
console.log(element.nodeName); // "DIV"

const element1 = document.querySelector(".message");
console.log(element1.textContent); // "Mi nombre es Manz."
element1.textContent = "Hola a todos";
console.log(element1.textContent); // "Hola a todos"