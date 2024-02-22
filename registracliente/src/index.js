import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Products from './produtos';
import Clients from './home';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/clientes" component={Clients} />
    <Route path="/produtos" component={Products} />
  </BrowserRouter>,
  document.getElementById('root')
);
