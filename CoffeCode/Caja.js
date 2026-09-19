const listaDePedidos = [];
let totalAcumulado = 0;

const caja = {
    //agrega el pedido a la lista
        agregarPedido: function(pedido) {
        listaDePedidos.push(pedido);
        totalAcumulado += pedido.total;
    },

    totalVenta: function() {
        console.log(`Total de pedidos capturados: ${listaDePedidos.length}`);
        console.log(`total acumulado: $${totalAcumulado}`);

       
    }
};

module.exports = caja; //exportamos caja para que otros archivo puedan usarlo