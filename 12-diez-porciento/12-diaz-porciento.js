// ==============================================================
// Ejercicio 12: Calcular el diez por ciento de un valor
// Leer un valor y calcular su porcentaje (P = valor * 0.10)
// ==============================================================

// Buscamos en el HTML el input y la caja del resultado (por su id).
const inputValor = document.getElementById("valor");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor no se calcula.
    if (inputValor.value === "") {
        cajaResultado.textContent = "Escribe el valor";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const valor = Number(inputValor.value);

    // Calcular el 10% del valor ingresado.
    const porcentaje = valor * 0.10;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Valor ingresado: <b>" + valor + "</b><br>" +
        "El 10% del valor es: <b>" + porcentaje + "</b>";
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputValor.addEventListener("input", calcular);