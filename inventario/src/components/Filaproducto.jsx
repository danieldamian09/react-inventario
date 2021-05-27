import React from 'react'


function Filaproducto({ producto }) {
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
        </tr>
    )
}

export default Filaproducto
