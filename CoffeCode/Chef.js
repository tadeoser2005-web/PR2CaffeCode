let inventarioProductos = [];
const Promociones = {id: 1, nombre: "Descuento 10% en Cafes", descuento: 0.1,
              id: 2, nombre: "Descuento 20% en Postres", descuento: 0.2,
              id: 3, nombre: "Descuento 30% en Hamburgesas", descuento: 0.3};





const Cocina = {


agregar: function(id, nombre, precio, categoria) { //agrega productos al inventario
    const nuevoProducto = {id: id, nombre: nombre, precio: precio, categoria: categoria}; //aqui indicamos que es un objeto y le asignamos los valores de los parametros 
    inventarioProductos.push(nuevoProducto); //agregamos el objeto al arreglo
},

//actualiza producto mediante el id
editar: function (id, nuevoNombre, nuevoPrecio) {
    const producto = inventarioProductos.find(p => p.id == id); //find revisa el array elemento por elemento 
    if (producto) {         //si encuentra el producto actualiza sus valores
        producto.nombre = nuevoNombre;
        producto.precio = nuevoPrecio;
    }
},

eliminar: function(id) { //elimina elemntos por el id
    inventarioProductos = inventarioProductos.filter(p=> p.id != id);
},

listar: function() { 
    return inventarioProductos;
 },


/* Agregar Promociones, consultar productos baratos/caros y buscar productos */


    buscarCaro: function() {
        let caro = inventarioProdcutos.filter(p => p.precio > 150);
        return caro;
    },



    buscarBarato: function(){
        let barato = inventarioProductos.filter(p => p.precio < 150);
        return barato;
    },



    buscarBebidas: function(){
        let bebidas = inventarioProductos.find(p => p.categoria === "bebida");
        return bebidas;
    },  


    buscarPostres: function(){
  let postres = inventarioProductos.find(p => p.categoria === "postres");
    return postres;

    },


}; 

module.exports = Cocina; 
module.exports = Promociones;
/* Solo hay que modificar el main para usar estas funciones, añadir la categoria a los productos y ver si el find funciona o lo cambiamos por filter */





