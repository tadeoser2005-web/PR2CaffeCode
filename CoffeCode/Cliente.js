const Cocina = require('./Chef');
const Caja = require('./Caja');

//importamos cehf y caja para poder usar metodos y atributos, creo q es como instanciar

const pedidosDeCliente = [];

const Cliente = {

    consultarProductos: function() {
        console.log("Menu ");
        const productos = Cocina.listar();   //mediante cociana manda a llamar el metodo listar q retorna el "menu"
        productos.forEach(producto => { //recorre el arreglo de productos
            console.log(`${producto.id} - ${producto.nombre} - $${producto.precio}`);//imprime cada producto usando el template
        });
    },

    crearPedido: function(idProducto, cantidad) {  //crea el pedido
        const productos = Cocina.listar();      //guardamos la lista del menu en la variable productos
        const productoEncontrado = productos.find(p => p.id == idProducto);
//busca el id del producto introducido en los parametros, y si encuentra coincidencia lo guarda en la variable productoEncontrado
        if(productoEncontrado) {
            const totalPedido = productoEncontrado.precio * cantidad;//multiplica el precio por la cantidad para calcular el total

            //guardamos un objeto con los siguientes datos 
            const pedido = {
                producto: productoEncontrado.nombre,
                cantidad: cantidad,
                total: totalPedido
            };

            pedidosDeCliente.push(pedido); //agregamos el pedido a la lista de pedidos
            Caja.agregarPedido(pedido);//mandamos el pedido a la caja

            console.log(`Pedido realizado: ${productoEncontrado.nombre} x${cantidad} ($${totalPedido})`);
            return pedido;
        } else {
            console.log(`Producto con ID ${idProducto} no encontrado`);
        }
    },


    //esta funcion enlista los pedidos del cliente 
    listaPedidos: function() {
        console.log(" Pedidos del Cliente");
        if(pedidosDeCliente.length == 0) {   //verificamos si hay pedidos 
            console.log("No tienes ningun pedido");
            return;
        }
     
        //reecorremos el arreglo de pedidos y mostramos cada uno, cada elemento es un objeto tipo pedido 
        pedidosDeCliente.forEach((pedido, index) => {
            console.log(`${index + 1}. ${pedido.producto} x ${pedido.cantidad}`);
           
        });
      
    }

};




module.exports = Cliente;  //exportamos cliente para usarlo en el main 