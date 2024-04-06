import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cliente = () => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifique se todos os campos obrigatórios foram preenchidos
    const camposObrigatorios = ['nome', 'dataNascimento', 'sexo', 'estadoCivil', 'cpf', 'estado', 'telefone', 'email'];
    const camposVazios = camposObrigatorios.filter(campo => !formData[campo]);

    if (camposVazios.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, preencha todos os campos obrigatórios.',
        toast: true,
      });
      return;
    }

    // Se todos os campos obrigatórios foram preenchidos, você pode prosseguir com o envio dos dados
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="container mt-4 w-100">
      <div className="row">
        <div className="col">
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
          <table class="table">
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
              <tr>
                <td>João</td>
                <td>01/01/1990</td>
                <td>Masculino</td>
                <td>Solteiro</td>
                <td>123.456.789-00</td>
                <td>São Paulo</td>
                <td>(11) 1234-5678</td>
                <td>joao@example.com</td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm mr-1">
                    <span class="mr-1">Editar</span>
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button type="button" class="btn btn-danger btn-sm">
                    <span class="mr-1">Excluir</span>
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
  );
};

export default Cliente;
