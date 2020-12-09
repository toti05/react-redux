import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
// import Productos from '../components/Productos';

//fn que se va a utlizar en la vista
//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        //consulta a la base de datos
        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);
            //si todo sale bien actualizar el state
            dispatch(agregarProductoExito(producto));
            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            //si hay un error cambiar el state
            dispatch(agregarProductoError(true));

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'No se Agrego el producto',
                text: 'error, intenta nuevamente :)'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

//si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: true
});

//paylod modifica el state
//dispatch manda a ejecutar las acciones, que en este caso son funciones y las pasas por objetos


//FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos')
            // console.log(respuesta.data);
            dispatch(descargarProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error)
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

//Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        //console.log(id);
        try {
            await clienteAxios.delete(`/productos/${id}`);
            //console.log(resultado);
            dispatch(eliminarProductoExito());
            //si se elimina mostrar alerta
            Swal.fire(
                'Eliminado!',
                'Se elimino correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }

    };

};

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

//eliminar producto
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

//Colocar producto en edicion
export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

//Edita un registro en la api y state
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto())

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            // console.log(resultado);
            dispatch(editarProductoExito(producto));
        } catch (error) {
            // console.log(error)
            dispatch(editarProductoError());
        }

    };
};

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = (producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})