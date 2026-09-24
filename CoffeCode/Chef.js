let inventarioProductos = [];

const promociones = [
    { id: 1, nombre: "Descuento 10% en Cafes", descuento: 0.1 },
    { id: 2, nombre: "Descuento 20% en Postres", descuento: 0.2 },
    { id: 3, nombre: "Descuento 30% en Te", descuento: 0.3 }
];

const Cocina = {


agregar: function(id, nombre, precio, categoria, stock) { //agrega productos al inventario
    const nuevoProducto = {id: id, nombre: nombre, precio: precio, categoria: categoria, stock: stock};
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


    buscarBaratos: function() {
        return inventarioProductos.filter(p => p.precio < 40);
    },



    buscarCaros: function() {
        return inventarioProductos.filter(p => p.precio >= 40);
    },



    buscarBebidas: function() {
        return inventarioProductos.filter(p => p.categoria === "bebida");
    },

    buscarPostres: function() {
        return inventarioProductos.filter(p => p.categoria === "postre");
    },

    obtenerPromociones: function() {
        return promociones;
    }
};

module.exports = Cocina;





