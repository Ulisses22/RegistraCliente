import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserFullName }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userFullName = localStorage.getItem('userFullName');
        if (userFullName) {
            // Se o usuário já estiver logado, redirecione para a página Home
            navigate('/home');
        }
    }, [navigate]);

    const handleLogin = () => {
        // Verifica se os campos de username e password estão vazios
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return; // Retorna sem continuar se os campos estiverem vazios
        }

        // Simulação de lógica de autenticação
        const fullName = username; 
        localStorage.setItem('userFullName', fullName); // Define o nome do usuário no localStorage
        setUserFullName(fullName); // Atualiza o estado do nome do usuário no componente App
        navigate('/home'); 
    };

    return (
        <div className="container mt-5 d-flex justify-content-center p-0">
            <div className="col-4 mt-5 p-2" style={{border: "1px solid black", borderRadius: "10px"}}>
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <button type="button" className="btn btn-primary mt-3 w-100" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
