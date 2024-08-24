let cadenaUsuario = prompt("Ingrese una cadena de caracteres para generar sus permutaciones:");

function generarPermutaciones(cadena) {
    if (cadena.length === 1) {
        return [cadena];
    }
    let permutaciones = []; 
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena[i];
        let restoCadena = cadena.slice(0, i) + cadena.slice(i + 1);
        let permutacionesResto = generarPermutaciones(restoCadena);
        permutacionesResto.map(permutacion => {
        permutaciones.push(caracterActual + permutacion);
        });
    }

    return permutaciones;
}

let resultadoPermutaciones = generarPermutaciones(cadenaUsuario);

console.log("Permutaciones de la cadena '" + cadenaUsuario + "':");
resultadoPermutaciones.forEach(perm => console.log(perm));
