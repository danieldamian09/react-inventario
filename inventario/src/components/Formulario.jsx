import React, { useState } from 'react';
import shortid from 'shortid';


function Formulario({ guardarNuevoProducto }) {

    const [producto, guardarProducto] = useState({
        nombre: '',
        cantidad: ''
    })

    const { nombre, cantidad } = producto;

    const [error, guardarError] = useState(false)

    const guardarInformacionInput = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const guardarTotalProductos = e => {
        e.preventDefault();
        if (nombre.trim() === '' || cantidad.trim() === '') {
            guardarError(true)
            return;
        }

        // asignar id
        producto.id = shortid.generate()

        guardarError(false)
        guardarNuevoProducto(producto)
        guardarProducto({
            nombre: '',
            cantidad: ''
        })
    }


    return (
        <div className="container">

            {error ? <p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={guardarTotalProductos}
            >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={guardarInformacionInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlfor="cantidad" className="form-label">Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        id="cantidad"
                        name="cantidad"
                        value={cantidad}
                        onChange={guardarInformacionInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}

export default Formulario
