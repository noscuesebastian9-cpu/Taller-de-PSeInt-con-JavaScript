// ==============================================================
// Ejercicio 13: Convertir pesos colombianos a dólares y euros
// Leer los pesos y realizar las conversiones correspondientes.
// ==============================================================

// Buscamos en el HTML el input y la caja del resultado (por su id).
const inputPesos = document.getElementById("pesos");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor de los pesos no se calcula.
    if (inputPesos.value === "") {
        cajaResultado.textContent = "Escribe el valor en pesos";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const pesos = Number(inputPesos.value);

    // Convertir los pesos colombianos a dólares.
    const dolar = pesos / 3100;

    // Convertir los pesos colombianos a euros.
    const euro = pesos / 3600;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Pesos colombianos: <b>$" + pesos.toFixed(2) + "</b><br>" +
        "Valor en dólares: <b>$" + dolar.toFixed(2) + "</b><br>" +
        "Valor en euros: <b>€" + euro.toFixed(2) + "</b>";
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputPesos.addEventListener("input", calcular);