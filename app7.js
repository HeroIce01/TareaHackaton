let cadenaNumeros = prompt("Ingrese una lista de números positivos separados por comas (por ejemplo: 10,3,5,3,10):");

let arrayNumeros = cadenaNumeros.split(",").map(numero => parseInt(numero.trim()));

function encontrarRepetidos(array) {
    let frecuencia = {}; 
    let repetidos = []; 

  
    array.forEach(numero => {
        if (frecuencia[numero]) {
            frecuencia[numero]++;
        } else {
            frecuencia[numero] = 1; 
        }
    });

    
    for (let numero in frecuencia) {
        if (frecuencia[numero] > 1) {
            repetidos.push(parseInt(numero)); 
        }
    }

    return repetidos;
}

let resultadoRepetidos = encontrarRepetidos(arrayNumeros);


console.log("Números repetidos en el array:", resultadoRepetidos);

