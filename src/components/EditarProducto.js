import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const EditarProducto = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    //nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });

    //producto a editar
    const productoEditar = useSelector((state) =>
        state.productos.productoeditar
    );
    //console.log(producto);


    //llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoEditar);
    }, [productoEditar])

    //Leer los datos del formulario
    const onchangeFormulario = ((e) => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    });

    if (!producto) return null;
    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onchangeFormulario}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                    value={precio}
                                    onChange={onchangeFormulario}
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-upppercase d-block w-100'
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;