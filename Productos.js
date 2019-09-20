export default class Producto {
    constructor(producto) {
        this._codigo = producto.codigo;
        this._nombre = producto.nombre;
        this._precio = producto.precio;
        this._cantidad = producto.cantidad;
        this._descripcion = producto.descripcion;

    }
    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }
    get descripcion() {
        return this._descripcion
    }
}