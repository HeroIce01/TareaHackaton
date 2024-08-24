let cadenaUsuario = prompt("Ingrese una cadena de texto para contar la frecuencia de caracteres:");

function contarCaracteres(cadena) {
    let frecuencia = {};

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i].toLowerCase();

        if (caracter.match(/[a-z0-9]/)) {
            if (frecuencia[caracter]) {
                frecuencia[caracter]++;
            } else {
                frecuencia[caracter] = 1;
            }
        }
    }

    let resultado = [];
    for (let caracter in frecuencia) {
        resultado.push({ caracter, veces: frecuencia[caracter] });
    }

    return resultado;
}

let resultadoFrecuencia = contarCaracteres(cadenaUsuario);

console.log("Frecuencia de caracteres en la cadena:");
resultadoFrecuencia.forEach(objeto => console.log(objeto));
