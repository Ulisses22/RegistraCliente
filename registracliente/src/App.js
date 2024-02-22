import React from 'react';
import { Route } from 'react-router-dom';
import Clients from './clientes';
import Products from './produtos';
import Home from './home';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/clientes" component={Clients} />
      <Route path="/produtos" component={Products} />
    </div>
  );
};

export default App;
