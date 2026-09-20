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
        const productos = Cocina.listar();
        const productoEncontrado = productos.find(p => p.id == idProducto);

        if(productoEncontrado) {
            const totalPedido = productoEncontrado.precio * cantidad;

            const pedido = {
                producto: productoEncontrado.nombre,
                cantidad: cantidad,
                total: totalPedido
            };

            pedidosDeCliente.push(pedido);
            Caja.agregarPedido(pedido);

            console.log(`Pedido realizado: ${productoEncontrado.nombre} x${cantidad} ($${totalPedido})`);
            return pedido;
        } else {
            console.log(`Producto con ID ${idProducto} no encontrado`);
        }
    },

    listaPedidos: function() {
        console.log("\n Pedidos del Cliente");
        if(pedidosDeCliente.length == 0) {
            console.log("No tienes ningun pedido");
            return;
        }
        let totalPagar = 0;
        pedidosDeCliente.forEach((pedido, index) => {
            console.log(`${index + 1}. ${pedido.producto} x ${pedido.cantidad}`);
            totalPagar += pedido.total;
        });
      
    }

};

module.exports = Cliente;