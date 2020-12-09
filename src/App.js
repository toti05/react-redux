import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//route cada pagina
//switch

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Productos} />

            <Route exact path='/productos/nuevo' component={NuevoProducto} />

            <Route exact path='/productos/nuevo' component={NuevoProducto} />

            <Route exact path='/productos/editar/:id' component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;


//Todo lo que este fuera del Switch se va a usar en todas las paginas
// Tdolo que este dentro del switch dentro del route se va a mostrar en la pagina indicada

// Route es un componente que se agrega para dar de alta direcciones en nuestro sitio hecho con React.
// Link se emplea para navegar entre los enlaces internos de nuestra aplicación.
