let cantidad = parseInt(prompt("Ingrese la cantidad de valores a ingresar:"));
let valores = [];
for (let i = 0; i < cantidad; i++) {
    let valor = parseFloat(prompt(`Ingrese el valor ${i + 1}:`));
    valores.push(valor);
}
function suma(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

function multiplicacion(array) {
    return array.reduce((acc, curr) => acc * curr, 1);
}

function valorMaximo(array) {
    return Math.max(...array);
}

function valorMinimo(array) {
    return Math.min(...array);
}

function ordenarAscendente(array) {
    return array.slice().sort((a, b) => a - b);
}

function promedio(array) {
    return suma(array) / array.length;
}

function valoresPares(array) {
    return array.filter(valor => valor % 2 === 0);
}

function insertarCeroDespuesDePares(array) {
    let nuevoArray = [];
    array.forEach(valor => {
        nuevoArray.push(valor);
        if (valor % 2 === 0) {
            nuevoArray.push(0); 
        }
    });
    return nuevoArray;
}

console.log("Suma de los valores:", suma(valores));
console.log("Multiplicación de los valores:", multiplicacion(valores));
console.log("Valor máximo:", valorMaximo(valores));
console.log("Valor mínimo:", valorMinimo(valores));
console.log("Array ordenado de forma ascendente:", ordenarAscendente(valores));
console.log("Promedio de los valores:", promedio(valores));
console.log("Valores pares en un nuevo array:", valoresPares(valores));
console.log("Array con 0 insertados después de cada número par:", insertarCeroDespuesDePares(valores));

