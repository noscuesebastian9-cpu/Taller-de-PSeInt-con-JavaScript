// ==============================================================
// Ejercicio 03: Hallar el área de un Rectángulo
// Leer la base y la altura y calcular el área (A = B * H)
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor de la base o la altura no se calcula.
    if (inputBase.value === "" || inputAltura.value === "") {
        cajaResultado.textContent = "Escribe la base y la altura";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const base = Number(inputBase.value);
    const altura = Number(inputAltura.value);

    // Calcular el área del rectángulo.
    const area = base * altura;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Base: <b>" + base + "</b><br>" +
        "Altura: <b>" + altura + "</b><br>" +
        "El área del rectángulo es: <b>" + area + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputBase.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);