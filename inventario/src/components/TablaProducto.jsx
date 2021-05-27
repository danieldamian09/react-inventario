import React from 'react'
import Filaproducto from '../components/Filaproducto'

function TablaProducto({ productos }) {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.map(producto => (
                        <Filaproducto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TablaProducto
