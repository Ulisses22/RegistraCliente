import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const CadastroCliente = () => {
    return (
      
        <div className="container">
            <h1 className="mt-5">Bem-vindo à Loja Online</h1>
            <div className="mt-3">
                <Link to="/products" className="btn btn-primary m-1 mr-2">Ver Produtos</Link>
                <Link to="/clients" className="btn btn-primary m-1">Ver Clientes</Link>
            </div>
        </div>
    );
};

export default CadastroCliente;