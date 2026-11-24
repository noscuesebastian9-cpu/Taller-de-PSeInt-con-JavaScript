// ==============================================================
// Ejercicio 07: Convertir grados Celsius a Fahrenheit
// Leer la temperatura y convertirla (F = (C * 9 / 5) + 32)
// ==============================================================

// Buscamos en el HTML el input y la caja del resultado (por su id).
const inputCelsius = document.getElementById("celsius");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor de la temperatura no se calcula.
    if (inputCelsius.value === "") {
        cajaResultado.textContent = "Escribe la temperatura";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const celsius = Number(inputCelsius.value);

    // Convertir los grados Celsius a Fahrenheit.
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Temperatura en Celsius: <b>" + celsius + " °C</b><br>" +
        "Temperatura en Fahrenheit: <b>" + fahrenheit + "°F</b>";
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputCelsius.addEventListener("input", calcular);