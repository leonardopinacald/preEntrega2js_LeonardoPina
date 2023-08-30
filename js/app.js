/*Mensaje de Inicio*/
let inicio = alert("¡Hola! Ingresa tus datos de usuario y dale un vistazo a las ofertas en autos que tenemos disponibles para vos!")

/*Contructor de Datos de Usuario*/

class Usuario {
    constructor(a, b){
        this.usuario = a;
        this.email = b;
    }
}

/*Ingreso de Datos de Usuario*/

let usuario = prompt("Ingresa tu Nombre de Usuario")
let email = prompt("Ingresa tu Correo Electrónico")

let usuarioNuevo = new Usuario(usuario, email);
let bienvenida = alert("Bienvenido " + usuario + " 🚗" + " .Nuestra Concesionaria Virtual. 🚗¡Echa un vistazo!😉")
console.log(usuarioNuevo);

//Producto
class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 0
    }

    agregarCantidad(cantidadDeseada){
        this.cantidad = this.cantidad + cantidadDeseada
    }

    descripcion(){
        return this.id+")" +" "+this.nombre+ " precio: $"+this.precio+"\n"
    }

    descripcionCarrito(){
        return "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+ " cantidad: "+this.cantidad+"\n"
    }
}

//Carrito
class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(productoNuevo){
        let existe = this.listaCarrito.some(producto => producto.id == productoNuevo.id)
        if(!existe){
            this.listaCarrito.push(productoNuevo)
        }
    }

    mostrar(){
        let descripcionListaCompra = "Carrito: \n\n"
        this.listaCarrito.forEach( producto => {
            descripcionListaCompra = descripcionListaCompra + producto.descripcionCarrito()
        })
        return descripcionListaCompra
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad ,0)
    }
}

class ProductController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    mostrar(){
        let descripcionListaProductos = "Recuerde el ID del producto que desea comprar\n\n"
        this.listaProductos.forEach( producto => {
            descripcionListaProductos = descripcionListaProductos + producto.descripcion()
        })
        return descripcionListaProductos
    }

    buscarId(id){
        return this.listaProductos.find(producto => producto.id == id)
    }
}

//Lista de Autos Disponibles
const c1 = new Producto(1,"Nuevo Citroen C3", 10150000)
const c2 = new Producto(2,"C4 Cactus Shine", 18650000)
const c3 = new Producto(3,"Berlingo Furgon", 9200000)
const c4 = new Producto(4,"Jumpy",15400000)
const c5 = new Producto(5,"Jumper",17650000)

const carrito = new Carrito()
const controladorP = new ProductController()

controladorP.agregar(c1)
controladorP.agregar(c2)
controladorP.agregar(c3)
controladorP.agregar(c4)
controladorP.agregar(c5)

let rta


do{
    //mostrar la lista de productos
    alert( controladorP.mostrar() )
    // ID de producto que desea comprar
    let id = Number(prompt("Ingrese el ID del producto que desea comprar!"))
    const producto = controladorP.buscarId(id)
    //cantidad 
    let cantidadDeseada = Number(prompt("Ingrese la cantidad que desea"))
    
    producto.agregarCantidad(cantidadDeseada)
    //agregarlo al carrito
    carrito.agregar(producto)
    //mostrar al usuario el producto que posee
    alert( carrito.mostrar() )


    rta = prompt("¿Desea finalizar la compra? (escriba 'SI' para finalizar)").toLowerCase()
}while(rta != "si")

//total
alert( "El total es de: $"+carrito.calcularTotal() )