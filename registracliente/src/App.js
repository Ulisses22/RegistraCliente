import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe os estilos do Bootstrap

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    estadoCivil: '',
    cpf: '',
    rg: '',
    cep: '',
    cidade: '',
    estado: '',
    telefone: '',
    email: '',
    profissao: '',
    empresa: '',
    cargo: '',
    renda: ''
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
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica de validação dos dados
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4"> {/* Adicione a classe 'container' para centralizar o formulário */}
      <h2>Cadastro de Cliente</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Nome completo:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Data de nascimento:</label>
            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Sexo:</label>
            <select name="sexo" value={formData.sexo} onChange={handleChange} className="form-control" required>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div className="form-group">
            <label>Estado civil:</label>
            <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>RG:</label>
            <input type="text" name="rg" value={formData.rg} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" name="cep" value={formData.cep} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} className="form-control" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Estado:</label>
            <input type="text" name="estado" value={formData.estado} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Profissão:</label>
            <input type="text" name="profissao" value={formData.profissao} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Empresa:</label>
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Cargo:</label>
            <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Renda:</label>
            <input type="text" name="renda" value={formData.renda} onChange={handleChange} className="form-control" required />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar</button> {/* Adicione a classe "btn" e "btn-primary" para estilizar o botão */}
    </form>
  );
};

export default CadastroCliente;
