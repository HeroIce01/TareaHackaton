let longitud = parseInt(prompt("Ingrese la longitud de los lados de la pirámide diamante:"));

function generarPiramideDiamante(longitud) {
    for (let i = 1; i <= longitud; i++) {
        let espacios = ' '.repeat(longitud - i); 
        let estrellas = '*'.repeat(2 * i - 1);   
        console.log(estrellas + espacios);       
    }
    for (let i = longitud - 1; i > 0; i--) {
        let espacios = ' '.repeat(longitud - i);
        let estrellas = '*'.repeat(2 * i - 1);  
        console.log(estrellas+espacios);
    }

}

generarPiramideDiamante(longitud);
