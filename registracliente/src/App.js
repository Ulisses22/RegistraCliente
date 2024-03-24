// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from './clientes';
import Products from './produtos';
import Home from './home';
import Login from './login';

const App = () => {
  const [userFullName, setUserFullName] = useState(localStorage.getItem('userFullName') || '');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserFullName={setUserFullName} />} />
        <Route path="/home" element={<Home userFullName={userFullName} />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/produtos" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
