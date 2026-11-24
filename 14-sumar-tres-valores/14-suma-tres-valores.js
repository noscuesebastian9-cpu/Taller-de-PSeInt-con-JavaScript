// ==============================================================
// Ejercicio 14: Sumar tres valores
// Leer tres valores y calcular su suma (S = A + B + C)
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputPrimerValor = document.getElementById("primerValor");
const inputSegundoValor = document.getElementById("segundoValor");
const inputTercerValor = document.getElementById("tercerValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta alguno de los valores no se calcula.
    if (inputPrimerValor.value === "" ||
        inputSegundoValor.value === "" ||
        inputTercerValor.value === "") {

        cajaResultado.textContent = "Escribe los tres valores";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const a = Number(inputPrimerValor.value);
    const b = Number(inputSegundoValor.value);
    const c = Number(inputTercerValor.value);

    // Calcular la suma de los tres valores.
    const suma = a + b + c;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Primer valor: <b>" + a + "</b><br>" +
        "Segundo valor: <b>" + b + "</b><br>" +
        "Tercer valor: <b>" + c + "</b><br>" +
        "La suma es: <b>" + suma + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputPrimerValor.addEventListener("input", calcular);
inputSegundoValor.addEventListener("input", calcular);
inputTercerValor.addEventListener("input", calcular);