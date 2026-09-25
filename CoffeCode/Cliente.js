const Cocina = require('./Chef');
const Caja = require('./Caja');

//importamos cehf y caja para poder usar metodos y atributos, creo q es como instanciar

const pedidosDeCliente = [];

const Cliente = {


    //consulta los productos disponibles con el map y el forEach
    consultarProductos: function() {
        console.log("Menu ");
        const productos = Cocina.listar();   //mediante cociana manda a llamar el metodo listar q retorna el "menu"
        productos.forEach(producto => { //recorre el arreglo de productos
            console.log(`${producto.id} - ${producto.nombre} - $${producto.precio}`);//imprime cada producto usando el template
        });
    },

      crearPedido: function(idProducto, cantidad) {
        const productos = Cocina.listar();
        const productoEncontrado = productos.find(p => p.id == idProducto);

        if (productoEncontrado) {
            
           //podemos jugar con los boolean para forzar el error, no hay falla
            Cocina.prepararPedido(productoEncontrado.nombre,
                function(mensaje){
                    Caja.estadoPedido(mensaje);

                },
                 false, false) 
                .then((mensajeExito) => {
                    // este es el caso de q la promesa termine bien, parece un try-catch
                    console.log(mensajeExito);

                    const totalPedido = productoEncontrado.precio * cantidad;
                    const pedido = {
                        producto: productoEncontrado.nombre,
                        cantidad: cantidad,
                        total: totalPedido
                    };

                    pedidosDeCliente.push(pedido);
                    Caja.agregarPedido(pedido);
                    console.log(`Pedido guardado con exito!`);
                })
                .catch((errorCocina) => {  //errorCocina es un parametro, imprime lo q hay en el reject dependiendo los parametros de preparar pedido
                    // en caso de que la promesa termine mal
                    console.log("No se pudo realizar el pedido -> " + errorCocina);
                });

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