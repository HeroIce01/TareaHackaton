let montoTotal = parseFloat(prompt("Ingrese el monto total:"));
let medioPago = prompt("Digite el método de pago (C: Tarjeta de crédito, E: Efectivo, D: Tarjeta débito):");

function facturacion(montoTotal, medioPago) {
    let descuento = 0;
    if (montoTotal > 400) {
        descuento = 0.40;
    } else if (montoTotal >= 200 && montoTotal <= 400) {
        switch (medioPago) {
            case 'E':
                descuento = 0.30;
                break;
            case 'D':
                descuento = 0.20;
                break;
            case 'C':
                descuento = 0.10;
                break;
        }
    }
    const montoFinal = montoTotal * (1 - descuento);
    return montoFinal;
}
let resultado = facturacion(montoTotal, medioPago);
alert("El monto final a abonar es: $" + resultado.toFixed(2));