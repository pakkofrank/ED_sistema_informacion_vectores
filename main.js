import Productos from "./Productos.js";
import Tienda from "./Tienda.js";

class Main{
    constructor(){
        let tienda = new Tienda(document.querySelector("#tabla"));

        document.querySelector("#agregar").addEventListener('click', ()=>{
            let codigo = Number(document.querySelector("#codigo").value);
            let nombre = document.querySelector("#nombre").value;
            let precio = Number(document.querySelector("#precio").value);
            let cantidad = Number(document.querySelector("#cantidad").value);
            let descripcion = document.querySelector("#descripcion").value;

            let objProducto = {
                codigo:codigo,
                nombre:nombre,
                precio:precio,
                cantidad:cantidad,
                descripcion:descripcion

            }

            let producto = new Productos(objProducto);

            tienda.agregarProducto(producto);
        });
    }
}

let m = new Main();