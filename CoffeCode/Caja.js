let listaDePedidos = [];
let totalAcumulado = 0;

const caja = {
    //agrega el pedido a la lista
    agregarPedido: function(pedido) {
        listaDePedidos.push(pedido);
        totalAcumulado += pedido.total;
    },

    totalVenta: function() {
        //se utiliza reduce y dertructuring en listaDePedidos
        const { subtotal, iva, total } = listaDePedidos.reduce(
            (acumulador, pedido) => {

                const { total } = pedido;//aqui se utiliza solo destructuring para sacar total de pedidos
                acumulador.subtotal += total;
                return acumulador;
            },
            { subtotal: 0, iva: 0, total: 0 }
        );

        const ivaCalculado = subtotal * .16;
        const totalFinal = subtotal + ivaCalculado;

        console.log(`total de pedidos: ${listaDePedidos.length}`);
        console.log(`subtotal: $${subtotal.toFixed(2)}`);
        console.log(`iva: $${ivaCalculado.toFixed(2)}`);
        console.log(`total: $${totalFinal.toFixed(2)}`);
    },
    estadoPedido: function(mensaje){
        console.log("caja: ->" + mensaje);
    }
};

module.exports = caja; //exportamos caja para que otros archivo puedan usarlo
