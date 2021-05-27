import React from 'react'

function ListaProducto({ producto }) {
    return (
        <div>
            <p>{producto.nombre}</p>
            <p>{producto.cantidad}</p>
        </div>
    )
}

export default ListaProducto
