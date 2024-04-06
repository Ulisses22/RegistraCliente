import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    estadoCivil: '',
    cpf: '',
    estado: '',
    telefone: '',
    email: '',
  });

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch('http://localhost:3001/cliente');
      if (response.ok) {
        const data = await response.json();
        setClientes(data);
      } else {
        throw new Error('Erro ao buscar clientes');
      }
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchClientes();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Cliente cadastrado com sucesso!',
          toast: true,
        });
      } else {
        throw new Error('Erro ao cadastrar cliente');
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro interno do servidor',
        toast: true,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/cliente/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchClientes();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Cliente excluído com sucesso!',
          toast: true,
        });
      } else {
        throw new Error('Erro ao excluir cliente');
      }
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro interno do servidor',
        toast: true,
      });
    }
  };

  return (
    <div className="container mt-4 w-100">
      <div className="row">
        <div className="col">
          <h2>Cadastro de Clientes</h2>
        <form onSubmit={handleSubmit}>
            <h2>Cadastro de Cliente</h2>
            <div className="form-group">
              <label>*Nome completo:</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*Data de nascimento:</label>
              <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*Sexo:</label>
              <select name="sexo" value={formData.sexo} onChange={handleChange} className="form-control">
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
            <div className="form-group">
              <label>*Estado civil:</label>
              <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*CPF:</label>
              <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*Estado:</label>
              <input type="text" name="estado" value={formData.estado} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*Telefone:</label>
              <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>*E-mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">Cadastrar</button>
          </form>
        </div>
        <div className="col">
          <h2>Lista de Clientes</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>Sexo</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Estado</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.dataNascimento}</td>
                  <td>{cliente.sexo}</td>
                  <td>{cliente.estadoCivil}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.estado}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email}</td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm mr-1">
                      <span className="mr-1">Editar</span>
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(cliente.id)}>
                      <span className="mr-1">Excluir</span>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cliente;
