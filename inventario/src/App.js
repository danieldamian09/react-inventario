import './App.css';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import ListaProducto from './components/ListaProducto';

function App() {

  const [productos, guardarProductos] = useState([])

  const guardarNuevoProducto = producto => {
    guardarProductos([
      ...productos,
      producto
    ])
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2 className="text-center">Inventario</h2>
            <Formulario
              guardarNuevoProducto={guardarNuevoProducto}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            {productos.map(producto => (
              <ListaProducto
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
