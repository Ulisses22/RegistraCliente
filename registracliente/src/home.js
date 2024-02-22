import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Bem-vindo à Loja Online</h1>
            <div>
                <Link to="/products">Ver Produtos</Link>
            </div>
            <div>
                <Link to="/clients">Ver Clientes</Link>
            </div>
        </div>
    );
};

export default HomePage;
