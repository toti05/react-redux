//Se usa en el action como en el reducer
//types para explicar lo que estas haciendo

export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
export const AGREGAR_PRODUCTO_EXITO = 'AGREGAR_PRODUCTO_EXITO';
export const AGREGAR_PRODUCTO_ERROR = 'AGREGAR_PRODUCTO_ERROR';

export const COMENZAR_DESCARGA_PRODUCTOS = 'COMENZAR_DESCARGA_PRODUCTOS';
export const DESCARGA_PRODUCTOS_EXITO = 'DESCARGA_PRODUCTOS_EXITO';
export const DESCARGA_PRODUCTOS_ERROR = 'DESCARGA_PRODUCTOS_ERROR';

export const OBTENER_PRODUCTO_ELIMINAR = 'OBTENER_PRODUCTO_ELIMINAR';
export const PRODUCTO_ELIMINADO_EXITO = 'PRODUCTO_ELIMINADO_EXITO';
export const PRODUCTO_ELIMINADO_ERROR = 'PRODUCTO_ELIMINADO_ERROR';

export const OBTENER_PRODUCTO_EDITAR = 'OBTENER_PRODUCTO_EDITAR';
export const COMENZAR_EDICION_PRODUCTO = 'COMENZAR_EDICION_PRODUCTO';
export const PRODUCTO_EDITADO_EXITO = 'PRODUCTO_EDITADO_EXITO';
export const PRODUCTO_EDITADO_ERROR = 'PRODUCTO_EDITADO_ERROR';

// Definir types que van a ir describiendo lo que pasa en la aplicacion
// Despues en tu action vas a tener una funcion que se tiene que utilizar en el componente de esa forma los datos del componente  se pueden pasar a las acciones y utilizas dispacth para ejecutar esas acciones.
// En productoActions vamos a realizar todo el trabajo de insertar en la base de datos o tambioen mandar ejecutar el reducer para modificar el state  

export const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
export const OCULTAR_ALERTA = 'OCULTAR_ALERTA';