let cadenaUsuario = prompt("Ingrese una cadena de caracteres para generar sus combinaciones:");
let longitudCombinacion = parseInt(prompt("Ingrese la longitud de las combinaciones:"));
let resultadoCombinaciones = [];

function generarCombinaciones(cadena, longitud, inicio = 0, combinacionActual = "", combinaciones = []) {
    if (combinacionActual.length === longitud) {
        combinaciones.push(combinacionActual);
        return;
    }

    for (let i = inicio; i < cadena.length; i++) {
        generarCombinaciones(cadena, longitud, i + 1, combinacionActual + cadena[i], combinaciones);
    }
}

generarCombinaciones(cadenaUsuario, longitudCombinacion, 0, "", resultadoCombinaciones);

console.log("Combinaciones de la cadena '" + cadenaUsuario + "' con longitud " + longitudCombinacion + ":");
resultadoCombinaciones.forEach(combinacion => console.log(combinacion));
