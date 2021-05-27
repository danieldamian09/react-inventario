import './App.css';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

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
        <h1 className="text-center">Inventario</h1>

        <Formulario
          guardarNuevoProducto={guardarNuevoProducto}
        />


      </div>
    </Fragment>
  );
}

export default App;
