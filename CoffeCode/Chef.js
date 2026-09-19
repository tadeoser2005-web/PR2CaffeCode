let inventarioProductos = [];

//let es para declarar una variable, en este caso indicamos que es un arreglo



// declaramos una variable contsante que nunca cambia, y esta guara el objeto que contiene las funciones
const Cocina = {

    //creamos una funcion q es una propiedad del objeto Cocina
    //los parametros son los datos que se necesitan para realizar la accion
agregar: function(id, nombre, precio) {
    const nuevoProducto = {id: id, nombre: nombre, precio: precio}; //aqui indicamos que es un objeto y le asignamos los valores de los parametros 
    inventarioProductos.push(nuevoProducto); //agregamos el objeto al arreglo
}, //coma para separar las funciones del objeto

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

listar: function() { //regresa lo que hay guardado en el inventario
    return inventarioProductos;
 }
}; //punto y coma para indicar que se cierra el objeto, no es obligatorio pero es buena practica para separar del resto del codigo

module.exports = Cocina; //exportamos el objeto Cocina para poder utilizarlo en otros archivos





// como funcina inventarioProductos.find(p => p.id == id);

//esta es la regla de busqueda, revisa cada producto (p) y busca si el id del producto es igual al id que se envio como parametro
//si encuentra el producto, lo guarda en la variable producto
//si no encuentra el producto, devuelve undefined

//=> significa: para este producto(p) evalua lo siguiente

//p.id == id : es la condicion de busqueda, se pregunta, el id del producto "p" es igual al id qeu recibi de parametro?

//devualve el objeto completo de lo que haya coincidido


// inventarioProductos.filter(p => p.id != id)

// filter crea un nuevo arreglo conservando los elemntos que cumplan con la condicion

//osea, pregutna, si el id es diferente el objeto se queda en la nueva lista, y si es igual se elimina de la nueva lista 