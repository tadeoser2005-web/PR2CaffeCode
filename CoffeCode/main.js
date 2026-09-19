const Cocina = require("./Chef");
const Cliente = require("./Cliente");
const Caja = require("./Caja");

// creamos productos
Cocina.agregar(1,"pan",30);
Cocina.agregar(2,"cafe",40);
Cocina.agregar(3,"te",35);

Cocina.editar(2,"cafe con leche",50);
Cocina.eliminar(1);

Cliente.consultarProductos();

Cliente.crearPedido(2,4);
Cliente.crearPedido(3,2);

Cliente.listaPedidos();

Caja.totalVenta();