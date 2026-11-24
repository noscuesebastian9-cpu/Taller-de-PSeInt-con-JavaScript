// ==============================================================
// Ejercicio 09: Conversión de Metros
// Leer una cantidad en metros y convertirla a otras medidas.
// ==============================================================

// Buscamos en el HTML el input y la caja del resultado (por su id).
const inputMetros = document.getElementById("metros");
const cajaResultado = document.getElementById("resultado");

function calcular() {

    // Si falta el valor de los metros no se calcula.
    if (inputMetros.value === "") {
        cajaResultado.textContent = "Escribe la cantidad en metros";
        return;
    }

    // Lo que se escribe en el input es texto: Number() lo convierte en número.
    const metros = Number(inputMetros.value);

    // Realizar las conversiones de metros.
    const kilometros = metros / 1000;
    const hectometros = metros / 100;
    const decametros = metros / 10;
    const decimetros = metros * 10;
    const centimetros = metros * 100;
    const milimetros = metros * 1000;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Metros: <b>" + metros + " m</b><br>" +
        "Kilómetros: <b>" + kilometros + " km</b><br>" +
        "Hectómetros: <b>" + hectometros + " hm</b><br>" +
        "Decámetros: <b>" + decametros + " dam</b><br>" +
        "Decímetros: <b>" + decimetros + " dm</b><br>" +
        "Centímetros: <b>" + centimetros + " cm</b><br>" +
        "Milímetros: <b>" + milimetros + " mm</b>";
}

// Cada vez que se escribe en el input, se vuelve a calcular.
inputMetros.addEventListener("input", calcular);