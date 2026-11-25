/* (POO) Programación a Objetos.

La POO es un paradigma de programación que organiza el software en clase y objetos para cambiar conceptos del
mundo real. Este enfoque promueve la reutilización del codigo, modularidad y mejor organización del software.
*/

// Crear el objeto automovil 

document.write('Creación de objeto AUTOMOVIL <br>');

var auto = {
    marca: 'Porsche',
    modelo: 'GT3',
    color: 'Negro',
    año: '2026',
    combustible: 'Gasolona',
    tipo: 'Carrera',
    radio: ['FM', 'MP4', 'USB']
}

// Acceso a las propiedaddes: Se utiliza la notación de punto (Auto.marca) Para acceder a las propiedades del objeto.

document.writeln(`marca: ${auto.marca}<br>`);
document.writeln(`modelo: ${auto.modelo}<br>`);
document.writeln(`color: ${auto.color}<br>`);
document.writeln(`año: ${auto.año}<br>`);
document.writeln(`combustible: ${auto.combustible}<br>`);
document.writeln(`tipo: ${auto.tipo}<br>`);
document.writeln(`radio: ${auto.radio.join(', ')}<br>`);

document.write(`<br>`);
document.write(`Tipos de vehiculos`, `<br>`);

class vehiculos {
    marca= 'Porsche';
    modelo= 'GT3';
    color= 'Negro';
    año= '2026';
    combustible= 'Gasolona';
    tipo= 'Carrera';
    precio = `$200.000.000.000`;

    // Metodos
    // Representan acciones o comportamientos en este caso del vehiculo.
    acelerar(){
        return `El ${this.marca} acelera de 0 a 100 km/h en 0,5 segundos.`;
        }
    frenar(){
        return `El ${this.marca} ${this.modelo} puede frenar  de 100 a 0 km/h en tan solo 1.5 segundos. `
    }
}

// crear un objeto basado basado en la clase vehiculo.
const porsche = new vehiculos();
// se declara una constante, luego la palabra reservada new; que significa que esta creando una nueva instancia  de tipo objeto y al 
//colocar el nombre de la clase, para este nuevo objeto tendrá a disposición los atributos y métodos de la clase 
//previamente Creada.//

//Mostrar las propiedades y métodos del objeto Porsche.
document.write(`marca: ${porsche.marca} <br>`);
document.write(`modelo: ${porsche.modelo} <br>`);
document.write(`color: ${porsche.color} <br>`);

document.write(`<br>`);
document.write(`Tipos de animales`, `<br>`);

// Mostrar tipos de animales al instructor :)

class animales {
    nombre=`Gato`;
    especie=`Siames`;
    habitat=`hogar`; 
    velocidad=`48 km/h`;
    sonido=`ronroneo`
    // Metodos
    cazar(){
        return `${this.nombre} un ${this.especie}, caza en su habitat de ${this.habitat}`
    }
    correr(){
        return `${this.velocidad}`
    }
    ronronear(){
        return `${this.sonido}`
    }
}

const gato = new animales ();
gato.nombre = "gato";
gato.especie = "Siames";
gato.habitat = "hogar";
gato.velocidad = "48 km/h";
gato.sonido = "ronroneo"; 

document.write(`<h2>${gato.nombre} </h2>`);
document.write(`especie: ${gato.especie} <br>`);
document.write(`habitat: ${gato.habitat} <br>`);
document.write(`velocidad: ${gato.velocidad} <br>`);
document.write(`sonido: ${gato.sonido} <br>`);
document.write(gato.cazar(), `<br>`);
document.write(gato.ronronear(), `<br>`);


document.write(`<br>================================`);


/* Herencia subclase y metodo*/
class Deportista {
    constructor (nombres, apellidos){
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
}

class futbolista extends Deportista {
    constructor(nombres, apellidos, goles) {
        super(nombres, apellidos);
        this.goles = goles;
    }
    
    get goles(){
        return this.goles;
    }
    set goles(newgoles){
        this.goles = newgoles;
    }

}

let futbolita2 = new futbolista(`Cristiano`, `Ronaldo`)

document.write(`<h3> ${Deportista.nombre} </h3>`);
document.write(`Deportista: ${futbolista.nombres} <br>`);
document.write(`Deportista: ${futbolista.apellidos} <br>`);
document.write(`Deportista: ${newgoles.goles} <br>`);


//// BUSCA Y INVESTIGA ESTE TRABAJO ////