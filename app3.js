let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

let imc = calcularIMC(peso, altura);

let clasificacion = clasificarIMC(imc);

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

console.log("IMC:", imc.toFixed(2));
console.log("Clasificación:", clasificacion);
