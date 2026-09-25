const readline = require('readline');
const Cocina = require('./Chef');
const Cliente = require('./Cliente');
const Caja = require('./Caja');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// productos iniciales de prueba
Cocina.agregar(1, "pan", 30);
Cocina.agregar(2, "cafe", 40);
Cocina.agregar(3, "te", 35);

function menu() {
    console.log("\nCoffeCode");
    console.log("1. Agregar producto (Cocina)");
    console.log("2. Editar producto (Cocina)");
    console.log("3. Eliminar producto (Cocina)");
    console.log("4. Consultar productos (Cliente)");
    console.log("5. Crear pedido (Cliente)");
    console.log("6. Ver lista de pedidos (Cliente)");
    console.log("7. Ver total de ventas (Caja)");
    console.log("8. Salir");

    rl.question("\nElige una opcion: ", function(opcion) {
        switch (opcion) {
  case '1':
      rl.question("ID del producto: ", function(id) {
      rl.question("Nombre del producto: ", function(nombre) {
     rl.question("Precio del producto: ", function(precio) {
     Cocina.agregar(Number(id), nombre, Number(precio));
               console.log("Producto agregado!");
                  menu();
 });
   });
    });
 break;

case '2':
rl.question("ID del producto a editar: ", function(id) {
 rl.question("Nuevo nombre: ", function(nuevoNombre) {
rl.question("Nuevo precio: ", function(nuevoPrecio) {
Cocina.editar(Number(id), nuevoNombre, Number(nuevoPrecio));
console.log("Producto editado!");
menu();
});
    });
       });
break;

case '3':
rl.question("ID del producto a eliminar: ", function(id) {
Cocina.eliminar(Number(id));
console.log("Producto eliminado!");
menu();
 });
break;

case '4':
Cliente.consultarProductos();
menu();
break;

case '5':
rl.question("ID del producto a pedir: ", function(idProducto) {
rl.question("Cantidad: ", function(cantidad) {
Cliente.crearPedido(Number(idProducto), Number(cantidad));
menu();
});
    });
break;

case '6':
Cliente.listaPedidos();
menu();
break;

case '7':
Caja.totalVenta();
menu();
break;

case '8':
console.log("GGS NEXT");
rl.close();
break;

default:
console.log("Eror en capa 8 ");
menu();
break;
}
});
}

// ejecutamos la funcion menumccc
menu();

