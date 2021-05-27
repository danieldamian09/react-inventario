import './App.css';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import TablaProducto from './components/TablaProducto';

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
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6">
            <h2 className="text-center">Inventario</h2>
            <Formulario
              guardarNuevoProducto={guardarNuevoProducto}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <TablaProducto
              productos={productos}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
