const readline = require('readline');
const Cocina = require('./Chef');
const Cliente = require('./Cliente');
const Caja = require('./Caja');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// productos iniciales de prueba 
Cocina.agregar(1, "pan", 30, "postre", 10);
Cocina.agregar(2, "cafe", 40, "bebida", 15);
Cocina.agregar(3, "te", 35, "bebida", 5);
Cocina.agregar(4, "rebanada de pastel", 65, "postre", 3);

function menu() {
    console.log(" MENU CAFETERIA ");
    console.log("1. Agregar producto (Cocina)");
    console.log("2. Editar producto (Cocina)");
    console.log("3. Eliminar producto (Cocina)");
    console.log("4. Buscar productos filtrados (Cocina)"); 
    console.log("5. Consultar productos y promociones (Cliente)");
    console.log("6. Crear pedido (Cliente)");
    console.log("7. Ver lista de pedidos (Cliente)");
    console.log("8. Ver total de ventas (Caja)");
    console.log("9. Salir");

    rl.question("\nElige una opcion: ", function(opcion) {
        switch (opcion) {
            case '1':
            rl.question("ID del producto: ", function(id) {
            rl.question("Nombre del producto: ", function(nombre) {
            rl.question("Precio del producto: ", function(precio) {
            rl.question("Categoria (bebida, postre, comida): ", function(categoria) {
            rl.question("Stock inicial: ", function(stock) {
            Cocina.agregar(Number(id), nombre, Number(precio), categoria, Number(stock));
            console.log("Producto agregado!");
            menu();
});
    });
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
                
                console.log("\n PRODUCTOS BARATOS  ");
                console.log(Cocina.buscarBaratos());
                
                console.log("\n-PRODUCTOS CAROS ");
                console.log(Cocina.buscarCaros());
                
                console.log("\n- BEBIDAS ");
                console.log(Cocina.buscarBebidas());
                
                console.log("\n POSTRES ");
                console.log(Cocina.buscarPostres());
                menu();
                break;

            case '5':
                Cliente.consultarProductos();
                menu();
                break;

            case '6':
            Cliente.consultarProductos();
            rl.question("\nID del producto a pedir: ", function(idProducto) {
            rl.question("Cantidad: ", function(cantidad) {
            Cliente.crearPedido(Number(idProducto), Number(cantidad));
            menu();
                    });
                });
                break;

            case '7':
                Cliente.listaPedidos();
                menu();
                break;

            case '8':
                Caja.totalVenta();
                menu();
                break;

            case '9':
                console.log("Saliendo del programa...");
                rl.close();
                break;

            default:
                console.log("Opcion no valida.");
                menu();
                break;
        }
    });
}

// ejecutamos la funcion menu
menu();