// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ userFullName }) => {
  const handleLogout = () => {
    localStorage.removeItem('userFullName');
    window.location.href = '/';
  };

  return (
    <div className="container">
      <h1 className="mt-5">Bem-vindo à Loja Online</h1>
      <div className="mt-3">
        <p>Bem-vindo, <b>{userFullName}</b>!</p>
        <Link to="/produtos" className="btn btn-primary m-1 mr-2">Ver Produtos</Link>
        <Link to="/clientes" className="btn btn-primary m-1">Ver Clientes</Link>
        <button onClick={handleLogout} className="btn btn-danger m-1">Logout</button>
      </div>
    </div>
  );
};

export default Home;
