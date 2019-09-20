export default class Tienda{
    constructor(tabla){
        this._tabla = tabla;
        this._vector = [];
    }
    _agregar(producto){
        let row = this._tabla.insertRow(-1);

        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);

        cellCodigo.innerHTML = producto.codigo;
        cellNombre.innerHTML = producto.nombre;
        cellPrecio.innerHTML = producto.precio;
        cellCantidad.innerHTML = producto.cantidad;
        cellDescripcion.innerHTML = producto.descripcion;

        let objProductos = {
            codigo:producto.codigo,
            nombre:producto.nombre,
            precio:producto.precio,
            cantidad:producto.cantidad,
            descripcion:producto.descripcion
        }

        this._vector.push(objProductos);
    }

    buscarProducto(codigo){
        let result = -1;
        this._vector.forEach((producto, index) => {
            if(producto.codigo === codigo){
                result = index;
                return;
            }
        });
        return result;

    }

    agregarProducto(producto){
        this._agregar(producto);
        Swal.fire({
            type: "success",
            title: "Correcto",
            text: "El producto se registro correctamente"
        })
    }

}