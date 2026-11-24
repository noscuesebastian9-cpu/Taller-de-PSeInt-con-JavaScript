// ==============================================================
// Ejercicio 02: Hallar el área de un Cuadrado
// Leer el lado y calcular el área del cuadrado (A = L * L)
// ==============================================================

// Buscamos en el HTML el input del lado y la caja del resultado (por su id).
const inputLado = document.getElementById("lado");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor del lado no se calcula.
    if (inputLado.value === "") {
        cajaResultado.textContent = "Escribe la longitud del lado";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const lado = Number(inputLado.value);

    // Calcular el área del cuadrado.
    const area = lado * lado;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Longitud del lado: <b>" + lado + "</b><br>" +
        "El área del cuadrado es: <b>"  + area  + "</b>";
}

// Cada vez que se escribe en el input del lado, se vuelve a calcular.
inputLado.addEventListener("input", calcular);