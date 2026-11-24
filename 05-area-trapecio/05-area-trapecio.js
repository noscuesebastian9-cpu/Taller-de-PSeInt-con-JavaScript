// ==============================================================
// Ejercicio 05: Hallar el área de un Trapecio
// Leer las dos bases y la altura (A = ((b + B) * H) / 2)
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputBaseMenor = document.getElementById("baseMenor");
const inputBaseMayor = document.getElementById("baseMayor");
const inputAltura = document.getElementById("altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta alguno de los valores no se calcula.
    if (inputBaseMenor.value === "" || inputBaseMayor.value === "" || inputAltura.value === "") {
        cajaResultado.textContent = "Escribe las dos bases y la altura";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const baseMenor = Number(inputBaseMenor.value);
    const baseMayor = Number(inputBaseMayor.value);
    const altura = Number(inputAltura.value);

    // Calcular el área del trapecio.
    const area = ((baseMenor + baseMayor) * altura) / 2;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Base menor: <b>" + baseMenor + "</b><br>" +
        "Base mayor: <b>" + baseMayor + "</b><br>" +
        "Altura: <b>" + altura + "</b><br>" +
        "El área del trapecio es: <b>" + area + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputBaseMenor.addEventListener("input", calcular);
inputBaseMayor.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);