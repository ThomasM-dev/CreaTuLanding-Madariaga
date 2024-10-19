let productos = []

const Agregar = () => {
    let insertar = prompt("ingresa el producto que deseas ingresar")
    productos.push (insertar) // agrega el producto al array
}

// Eliminar elementos de la lista
const eliminar = () => {
    let quitar = prompt("Ingresa el nombre del producto que deseas eliminar")
    let index = productos.indexOf (quitar)

    // verifica que exista en el array
    if (index > -1) {
        productos.splice (index, 1) // elimina un producto según su índice
        alert ("Producto eliminado " + quitar)
} else {
    alert ("el producto no se encuentra en la lista")
}
}
// Mostrar lista 
const mostrar = () => {
    // verifica que el array no este vacio
    if (productos.length > 0) {
        alert("Lista de Productos " + productos.join ("-"))
} else {
    alert ("la lista esta vacia")
}
}
//  Menu 
const menu = () => {
    // se declara la variable opcion
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione una opción: 1. Agregar elemento 2. Mostrar lista 3.Eliminar Productos 4. Salir"))
        switch (opcion) {
            case 1 :
                Agregar()
                // muestra la lista después de agregar
                mostrar ()
                break;
            case 2 :
                mostrar()
                break;
            case 3 :
            eliminar ()
            // muestra la lista después de eliminar
            mostrar ()
            break;
            case 4 :
                alert ("Saliendo....")
            break;
            default:
            alert("ingresa una opcion valida")
            break;
        }
        // el bucle se repite mientras la variable opcion no sea igual a 4
    } while (opcion !== 4);
}
menu ()