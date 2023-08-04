//alert()

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

//console.log (tazaCeramicaA.precio)

let infoProducto = prompt ("Elija un producto para mas información: Taza Cerámica A - Taza Mágica A - Taza Plástica A - Taza Cerámica B - Taza Mágica B - Taza Plástica B o ingresar enter para continuar");
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

const tazas = [tazaCeramicaA, tazaCeramicaB, tazaCeramicaA, tazaCeramicaB, tazaPlasticaA, tazaPlasticaB];




/*Podrías usar un array para contener los objetos con la información de los productos. De este modo, la información de los productos estará localizada en un lugar y podrás usar los 
distintos métodos de array para obtener información de los productos. Podrías modificar el código de selección de producto y solicitarle al usuario que ingrese el nombre del producto o 
id que desea. Luego podrías usar un método de array para buscar y obtener la información del objeto que el usuario ingresó, posteriormente podrías guardar esta información en el array 
carrito. Quedo a la espera por la re entrega del código .  En cuanto a requerimientos, estaría haciendo falta que incluyas el uso de algún método de array de orden superior
(find, filter, map, forEach, etc). Si tienes alguna consulta sobre el código o necesitas alguna orientación puedes enviarme un mensaje por el chat de la plataforma.*/