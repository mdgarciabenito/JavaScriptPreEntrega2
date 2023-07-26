//alert()

class producto {
    constructor (nombre, tipo, cualidad, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cualidad = cualidad;
        this.precio = parseFloat (precio)
    }
}

const tazaCeramicaA = new producto ("Taza Cerámica A", "taza", "cerámica", 15);
const tazaMagicaA = new producto ("Taza Mágica A", "taza", "mágica", 25);
const tazaPlasticaA = new producto ("Taza Plástica A", "taza", "plástica", 15);
const tazaCeramicaB = new producto ("Taza Cerámica B", "taza", "cerámica", 15);
const tazaMagicaB = new producto ("Taza Mágica B", "taza", "mágica", 25);
const tazaPlasticaB = new producto ("Taza Plástica B", "taza", "plástica", 15);

//console.log (tazaCeramicaA.precio)

let infoProducto = prompt ("Elija un producto para mas información: Taza Cerámica A - Taza Mágica A - Taza Plástica A - Taza Cerámica B - Taza Mágica B - Taza Plástica B");
console.log (infoProducto)

if (infoProducto == "Taza Cerámica A"){
    alert ("Seleccionaste Taza Cerámica A. Es una " + tazaCeramicaA.tipo + " de " + tazaCeramicaA.cualidad + " y el precio es de " + tazaCeramicaA.precio);
}
else if (infoProducto == "Taza Mágica A"){
    alert ("Seleccionaste Taza Mágica A. Es una " + tazaMagicaA.tipo + " de " + tazaMagicaA.cualidad + " y el precio es de " + tazaMagicaA.precio);
}
else if (infoProducto == "Taza Plástica A"){
    alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaA.tipo + " de " + tazaPlasticaA.cualidad + " y el precio es de " + tazaPlasticaA.precio);
}
else if (infoProducto == "Taza Cerámica B"){
    alert ("Seleccionaste Taza Cerámica B. Es una " + tazaCeramicaB.tipo + " de " + tazaCeramicaB.cualidad + " y el precio es de " + tazaCeramicaB.precio);
}
else if (infoProducto == "Taza Mágica B"){
    alert ("Seleccionaste Taza Mágica B. Es una " + tazaMagicaB.tipo + " de " + tazaMagicaB.cualidad + " y el precio es de " + tazaMagicaB.precio);
}
else if (infoProducto == "Taza Plástica B"){
    alert ("Seleccionaste Taza Plástica A. Es una " + tazaPlasticaB.tipo + " de " + tazaPlasticaB.cualidad + " y el precio es de " + tazaPlasticaB.precio);
}
else {
    alert("Error al ingresar producto, volver a intentar");
}

const carrito = [];

let cantidadProductos = 0;

do {
    let ingresarCarrito = prompt ("Que producto desea comprar? Taza Cerámica A - Taza Mágica A - Taza Plástica A - Taza Cerámica B - Taza Mágica B - Taza Plástica B. Dejar en blanco para finalizar")
    carrito.push (ingresarCarrito)
} while (ingresarCarrito == " ") 