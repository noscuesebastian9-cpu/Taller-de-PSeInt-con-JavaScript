// ==============================================================
// Ejercicio 08: Operaciones con cinco valores
// Realizar una suma, dos restas, multiplicación y división.
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputPrimerValor = document.getElementById("primerValor");
const inputSegundoValor = document.getElementById("segundoValor");
const inputTercerValor = document.getElementById("tercerValor");
const inputCuartoValor = document.getElementById("cuartoValor");
const inputQuintoValor = document.getElementById("quintoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta alguno de los valores no se calcula.
    if (inputPrimerValor.value === "" ||
        inputSegundoValor.value === "" ||
        inputTercerValor.value === "" ||
        inputCuartoValor.value === "" ||
        inputQuintoValor.value === "") {

        cajaResultado.textContent = "Escribe los cinco valores";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const a = Number(inputPrimerValor.value);
    const b = Number(inputSegundoValor.value);
    const c = Number(inputTercerValor.value);
    const d = Number(inputCuartoValor.value);
    const e = Number(inputQuintoValor.value);

    // Sumar los cinco valores.
    const suma = a + b + c + d + e;

    // Restar los primeros tres valores a la suma.
    const resta1 = suma - a - b - c;

    // Restar los últimos dos valores a la suma.
    const resta2 = suma - d - e;

    // Multiplicar los resultados de las dos restas.
    const multiplicacion = resta1 * resta2;

    // Dividir la suma entre la multiplicación.
    let division;

    if (multiplicacion === 0) {
        division = "No se puede dividir entre cero";
    } else {
        division = (suma / multiplicacion).toFixed(2); // Limitar a 2 decimales
    }

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Primer valor: <b>" + a + "</b><br>" +
        "Segundo valor: <b>" + b + "</b><br>" +
        "Tercer valor: <b>" + c + "</b><br>" +
        "Cuarto valor: <b>" + d + "</b><br>" +
        "Quinto valor: <b>" + e + "</b><br>" +
        "Suma inicial: <b>" + suma + "</b><br>" +
        "Primera resta: <b>" + resta1 + "</b><br>" +
        "Segunda resta: <b>" + resta2 + "</b><br>" +
        "Multiplicación: <b>" + multiplicacion + "</b><br>" +
        "Resultado final: <b>" + division + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputPrimerValor.addEventListener("input", calcular);
inputSegundoValor.addEventListener("input", calcular);
inputTercerValor.addEventListener("input", calcular);
inputCuartoValor.addEventListener("input", calcular);
inputQuintoValor.addEventListener("input", calcular);