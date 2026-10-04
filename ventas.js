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

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);

}

function validarSueldoBase() {
    validarInput("txtSueldoBase", "errorSueldoBase");
}

function validarVentas() {
    validarInput("txtVentas", "errorVentas");
}

function validarPrecio() {
    validarInput("txtPrecio", "errorPrecio");
}


function validarInput(idInput, idError) {

    let input = document.getElementById(idInput);
    let mensaje = document.getElementById(idError);

    let valor = input.value.trim();

    // Limpiar mensaje anterior
    mensaje.textContent = "";

    // No puede estar vacío
    if (valor === "") {
        mensaje.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    // Solo números
    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números.";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}

