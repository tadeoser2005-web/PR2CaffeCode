let inventarioProductos = [];






const Cocina = {

 
  
agregar: function(id, nombre, precio) {
    const nuevoProducto = {id: id, nombre: nombre, precio: precio}; //aqui indicamos que es un objeto y le asignamos los valores de los parametros 
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
 }
}; 

module.exports = Cocina; 


/* Agregar Promociones, consultar productos baratos/caros y buscar productos */




Promociones = {id: 1, nombre: "Descuento 10%", descuento: 0.1,
              id: 2, nombre: "Descuento 20%", descuento: 0.2,
              id: 3, nombre: "Descuento 30%", descuento: 0.3};

let AgregarPromociones = {
    agregarPromocion: function(id, nombre, descuento) {
        const nuevaPromocion = {id: id, nombre: nombre, descuento: descuento};
        inventarioProductos.push(Promociones);
    }
};


module.exports = AgregarPromociones;


