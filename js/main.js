console.log ("*------------------------------------------------------------------------------*");

console.log ("Constructor de Productos");

class Producto {
    constructor (nombre, tipo, cualidad, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cualidad = cualidad;
        this.precio = parseFloat (precio)
    }
}

const tazaCeramicaA = new Producto ("Taza Cerámica A", "taza", "cerámica", 15);
const tazaMagicaA = new Producto ("Taza Mágica A", "taza", "mágica", 25);
const tazaPlasticaA = new Producto ("Taza Plástica A", "taza", "plástica", 15);
const tazaCeramicaB = new Producto ("Taza Cerámica B", "taza", "cerámica", 15);
const tazaMagicaB = new Producto ("Taza Mágica B", "taza", "mágica", 25);
const tazaPlasticaB = new Producto ("Taza Plástica B", "taza", "plástica", 15);

console.log ("*------------------------------------------------------------------------------*");

//Array

console.log ("Array de Tazas");

const tazas = [
    {nombre: "Taza Cerámica A", tipo: "taza", cualidad: "ceramica", precio: 15 },
    {nombre: "Taza Cerámica B", tipo: "taza", cualidad: "ceramica", precio: 15},
    {nombre: "Taza Plástica A", tipo: "taza", cualidad: "plástica", precio: 15},
    {nombre: "Taza Plástica B", tipo: "taza", cualidad: "plástica", precio: 15},
    {nombre: "Taza Mágica A", tipo: "taza", cualidad: "mágica", precio: 25},
    {nombre: "Taza Mágica B", tipo: "taza", cualidad: "mágica", precio: 25}
]
console.log(tazas);

console.log ("*------------------------------------------------------------------------------*");


//Crear nuevo Array sumando IVA a los precios

console.log ("Array de Tazas con IVA");

const tazasIVA = tazas.map (item => (
    {nombre: item.nombre, tipo: item.tipo, cualidad: item.cualidad, precio: item.precio*1.21}
))
console.log (tazasIVA)

console.log ("*------------------------------------------------------------------------------*");

console.log ("Cada Objeto del Array tazasIVA");

/*tazas.forEach(function(taza){
    console.log (taza)
})*/

tazasIVA.forEach ((taza) => console.log (taza));

console.log ("*------------------------------------------------------------------------------*");


//Agregar Productos a un Array carrito

const carrito = []

let elegirProducto = prompt ("Elija un producto ingresando un número: Taza Cerámica A = 1 / Taza Mágica A = 2 /  Taza Plástica A = 3 /  Taza Cerámica B = 4 / Taza Mágica B = 5 / Taza Plástica B = 6");

    if (elegirProducto == "1"){
        alert ("Seleccionaste Taza Cerámica A. Es una " + tazaCeramicaA.tipo + " de " + tazaCeramicaA.cualidad + " y el precio es de " + tazaCeramicaA.precio + ". Se agregará al carrito");
        carrito.push (tazaCeramicaA);
    }
    else if (elegirProducto == "2"){
        alert ("Seleccionaste Taza Mágica A. Es una " + tazaMagicaA.tipo + " de " + tazaMagicaA.cualidad + " y el precio es de " + tazaMagicaA.precio);
        carrito.push (tazaMagicaA);
    }
    else if (elegirProducto == "3"){
        alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaA.tipo + " de " + tazaPlasticaA.cualidad + " y el precio es de " + tazaPlasticaA.precio);
        carrito.push (tazaPlasticaA);
    }
    else if (elegirProducto == "4"){
        alert ("Seleccionaste Taza Cerámica B. Es una " + tazaCeramicaB.tipo + " de " + tazaCeramicaB.cualidad + " y el precio es de " + tazaCeramicaB.precio);
        carrito.push (tazaCeramicaB);
    }
    else if (elegirProducto == "5"){
        alert ("Seleccionaste Taza Mágica B. Es una " + tazaMagicaB.tipo + " de " + tazaMagicaB.cualidad + " y el precio es de " + tazaMagicaB.precio);
        carrito.push (tazaMagicaB);
    }
    else if (elegirProducto == "6"){
        alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaB.tipo + " de " + tazaPlasticaB.cualidad + " y el precio es de " + tazaPlasticaB.precio);
        carrito.push (tazaPlasticaB);
    }
    else {
        alert("Error al ingresar producto, volver a intentar");
    }

/*console.log ("*------------------------------------------------------------------------------*");

const agregarOtro = confirm ("Desea agregar otro producto? Ingrese Si, o cualquier tecla para finalizar");

    if (agregarOtro) {
        elegirProducto;
    }
    else {
        alert("Gracias por comprar con nosotros");
    }

console.log ("*------------------------------------------------------------------------------*");*/

console.log ("Cada Objeto del Array Carrito");
carrito.forEach ((item) => console.log (item));

console.log ("*------------------------------------------------------------------------------*");


//console.log (carrito);

/*Podrías usar un array para contener los objetos con la información de los productos. De este modo, la información de los productos estará localizada en un lugar y podrás usar los 
distintos métodos de array para obtener información de los productos. Podrías modificar el código de selección de producto y solicitarle al usuario que ingrese el nombre del producto o 
id que desea. Luego podrías usar un método de array para buscar y obtener la información del objeto que el usuario ingresó, posteriormente podrías guardar esta información en el array 
carrito. Quedo a la espera por la re entrega del código .  En cuanto a requerimientos, estaría haciendo falta que incluyas el uso de algún método de array de orden superior
(find, filter, map, forEach, etc). Si tienes alguna consulta sobre el código o necesitas alguna orientación puedes enviarme un mensaje por el chat de la plataforma.*/