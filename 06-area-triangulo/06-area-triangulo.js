// ==============================================================
// Ejercicio 06: Hallar el área de un Triángulo
// Leer la base y la altura y calcular el área (A = (B * H) / 2)
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta alguno de los valores no se calcula.
    if (inputBase.value === "" || inputAltura.value === "") {
        cajaResultado.textContent = "Escribe la base y la altura";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const base = Number(inputBase.value);
    const altura = Number(inputAltura.value);

    // Calcular el área del triángulo.
    const area = (base * altura) / 2;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Base: <b>" + base + "</b><br>" +
        "Altura: <b>" + altura + "</b><br>" +
        "El área del triángulo es: <b>" + area + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputBase.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);