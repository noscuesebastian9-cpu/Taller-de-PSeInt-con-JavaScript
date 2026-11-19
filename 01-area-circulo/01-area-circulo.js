// ==============================================================
// Ejercicio 01: Hayar el área de un Cículo
// leer el radio y calcular el área del circulo (A = π * r^2)
// ==============================================================

// Buscamos en el HMTL el input del radio y la caja del resultado (por su id).
const inputRadio = document.getElementById("radio");
const cajaResultado = document.getElementById("Resultado");

function calcular() {
    //Si falta el valor del radio no se calcula.
    if (inputRadio.value === "") {
        cajaResultado.textContent = "Escribe el radio";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en numero.
    const radio = Number(inputRadio.value);

    // Calcular el área del círculo.
    const area = Math.PI * radio * radio;

    // Mostrar el resultado en la página.
    cajaResultado.innerHTML = "El área del círculo es: <b>" + area.toFixed(2) + "</b>";
}

// Cada vez que se escribe en el input del radio, se vuelve a calcular.
inputRadio.addEventListener("input", calcular);



