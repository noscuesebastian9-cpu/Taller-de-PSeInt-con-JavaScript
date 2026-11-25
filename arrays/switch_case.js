/* condicional switch case

E SWITCH es una estructura de control  utilizada para tomar desiciones basadas en el valor de expresión.
Es útil cuando se desea comprar un mismo valor con mútiples casos posibles y ejecutar un bloque de codigo según
el caso que coincida.
*/

let valor; 
valor = parseInt(prompt( 'Ingrese valores entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('Ustes ingresó el número: ', valor);
        break;
    case 2:
    document.write('Usted Ingreso el número:', valor);
            break;
    case 3:
        document.write('Usted Ingresó el número: ', valor);
            break;

    default:
        document.write('El número esta fuera de rango o no es un número válido');
        break;
}
document.write('<br>');

let color; 
color =prompt ('Ingrese uno de estos colores: Rojo, Verde o Azul');
switch (color) {
        case 'Rojo':
        document.write('Ustes ingresó el color: ', color);
        break;
    case 'Verde':
    document.write('Usted Ingreso el color:', color);
            break;
    case 'Azul':
        document.write('Usted Ingresó el color: ', color);
            break;

    default:
        document.write('El color esta fuera de rango o no es un número válido');
        break;
}
document.write('<br>');