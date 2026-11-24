// ==============================================================
// Ejercicio 04: Hallar el área de un Rombo
// Leer las diagonales y calcular el área (A = (D * d) / 2)
// ==============================================================

// Buscamos en el HTML los inputs y la caja del resultado (por su id).
const inputDiagonalMayor = document.getElementById("diagonalMayor");
const inputDiagonalMenor = document.getElementById("diagonalMenor");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor de alguna diagonal no se calcula.
    if (inputDiagonalMayor.value === "" || inputDiagonalMenor.value === "") {
        cajaResultado.textContent = "Escribe las dos diagonales";
        return;
    }

    // Lo que se escribe en los inputs es texto: Number() lo convierte en número.
    const diagonalMayor = Number(inputDiagonalMayor.value);
    const diagonalMenor = Number(inputDiagonalMenor.value);

    // Calcular el área del rombo.
    const area = (diagonalMayor * diagonalMenor) / 2;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Diagonal mayor: <b>" + diagonalMayor + "</b><br>" +
        "Diagonal menor: <b>" + diagonalMenor + "</b><br>" +
        "El área del rombo es: <b>" + area + "</b>";
}

// Cada vez que se escribe en los inputs, se vuelve a calcular.
inputDiagonalMayor.addEventListener("input", calcular);
inputDiagonalMenor.addEventListener("input", calcular);