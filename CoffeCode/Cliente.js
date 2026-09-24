const Cocina = require('./Chef');
const Caja = require('./Caja');

const pedidosDeCliente = [];

const Cliente = {


    //consulta los productos disponibles con el map y el forEach
    consultarProductos: function() {
        console.log("\nProductos disponibles");
        const productos = Cocina.listar();   

       
        const menuFormateado = productos.map(producto => {
            return `${producto.id} - ${producto.nombre} (${producto.categoria}): $${producto.precio} [Stock: ${producto.stock}]`;
        });
        
        // forEach() para imprimir cada elemento disponible
        menuFormateado.forEach(item => console.log(item));

        console.log("\nPromociones");
        const promociones = Cocina.obtenerPromociones();
        
        // map() para darle formato a las promociones y forEach() para mostrarlas
        const promosFormateadas = promociones.map(promo => `- ${promo.nombre}`);
        promosFormateadas.forEach(promo => console.log(promo));
    },

    crearPedido: function(idProducto, cantidad) { 
        const productos = Cocina.listar();      
        
        // find() busca el id del producto
        const productoEncontrado = productos.find(p => p.id == idProducto);

        if(productoEncontrado) {
            if (productoEncontrado.stock < cantidad) {
                console.log(`No hay suficiente stock Stock disponible: ${productoEncontrado.stock}`);
                return;
            }

            productoEncontrado.stock -= cantidad;

            if (productoEncontrado.stock <= 0) {
                Cocina.eliminar(productoEncontrado.id);
            }

            const totalPedido = productoEncontrado.precio * cantidad;

            const pedido = {
                producto: productoEncontrado.nombre,
                cantidad: cantidad,
                total: totalPedido
            };

            pedidosDeCliente.push(pedido); 
            Caja.agregarPedido(pedido);

            console.log(`Pedido realizado: ${productoEncontrado.nombre} x${cantidad} (Subtotal: $${totalPedido})`);
            return pedido;
        } else {
            console.log(`Producto con ID ${idProducto} no encontrado`);
        }
    },

    listaPedidos: function() {
        console.log("\nPedidos del Cliente");
        if(pedidosDeCliente.length == 0) {   
            console.log("No tienes ningun pedido");
            return;
        }
     
        // forEach() para recorrer e imprimir
        pedidosDeCliente.forEach((pedido, index) => {
            console.log(`${index + 1}. ${pedido.producto} x ${pedido.cantidad}`);
        });
    }
};

module.exports = Cliente;