const VENTAS_BASE = 5
function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
        return comision;
    
}

function calcular() {

    //recupermaos propiedades de la caja de txt
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de txt
    let sueldoBaseStr=componenteSueldoBase.value;
    let ventasStr=componenteVentas.value;
    let precioStr=componentePrecio.value;

    //convertimos los valores a numeros
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(ventasStr);
    let precioProducto = parseFloat(precioStr);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;
     let spSueldoBase = document.getElementById("spSueldoBase");
     let spComision = document.getElementById("spComision");
     let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase
    spComision.textContent = comision
    spTotal.textContent = total

    
}
