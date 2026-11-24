// ==============================================================
// Ejercicio 10: Calcular el costo total de un Automóvil
// Ganancia del vendedor (12%) e impuesto (6%)
// ==============================================================

// Buscamos en el HTML el input y la caja del resultado (por su id).
const inputPrecio = document.getElementById("precio");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor del precio no se calcula.
    if (inputPrecio.value === "") {
        cajaResultado.textContent = "Escribe el precio del automóvil";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const precio = Number(inputPrecio.value);

    // Calcular la ganancia del vendedor.
    const ganancia = precio * 0.12;

    // Calcular el impuesto.
    const impuesto = precio * 0.06;

    // Calcular el costo total para el comprador.
    const costoTotal = precio + ganancia + impuesto;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Precio del vehículo: <b>$" + precio.toFixed(2) + "</b><br>" +
        "Ganancia del vendedor (12%): <b>$" + ganancia.toFixed(2) + "</b><br>" +
        "Impuesto (6%): <b>$" + impuesto.toFixed(2) + "</b><br>" +
        "Costo total: <b>$" + costoTotal.toFixed(2) + "</b>";
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputPrecio.addEventListener("input", calcular);

// Mostrar el resultado inicial al abrir la página.
calcular();