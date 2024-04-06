import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe os estilos do Bootstrap

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    descricao: '',
    categoria: '',
    marca: '',
    modelo: '',
    unidadeMedida: '',
    estoque: '',
    precoCusto: '',
    precoVenda: '',
    foto: '',
    dimensoesPeso: '',
    cor: '',
    material: '',
    garantia: '',
    origem: ''
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
    const camposObrigatorios = ['codigo', 'descricao', 'categoria', 'marca', 'modelo', 'unidadeMedida', 'estoque', 'precoCusto', 'precoVenda'];
    const camposVazios = camposObrigatorios.filter(campo => !formData[campo]);

    if (camposVazios.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, preencha todos os campos obrigatórios.'
      });
      return;
    }

    // Se todos os campos obrigatórios foram preenchidos, você pode prosseguir com o envio dos dados
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2>Cadastro de Produto</h2>
            <div className="row">

              <div class="col-6">
                <label>Código:</label>
                <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} className="form-control" required />
              </div>
              <div class="col-6">
                <label>Estoque:</label>
                <input type="text" name="estoque" value={formData.estoque} onChange={handleChange} className="form-control" required />
              </div>
            </div>

            <div className="row">
              <div class="col-6">
                <label>Categoria:</label>
                <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} className="form-control" required />
              </div>
              <div class="col-6">
                <label>Marca:</label>
                <input type="text" name="marca" value={formData.marca} onChange={handleChange} className="form-control" required />
              </div>

            </div>
            <div className="row">
              <div class="col-6">
                <label>Modelo:</label>
                <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} className="form-control" required />
              </div>
              <div class="col-6">
                <label>Unidade de medida:</label>
                <input type="text" name="unidadeMedida" value={formData.unidadeMedida} onChange={handleChange} className="form-control" required />
              </div>
            </div>


            <div className="row d-flex">
              <div class="col-6">
                <label>Preço de venda:</label>
                <input type="text" name="precoVenda" value={formData.precoVenda} onChange={handleChange} className="form-control" required />
              </div>
              <div class="col-6">
                <label>Preço de custo:</label>
                <input type="text" name="precoCusto" value={formData.precoCusto} onChange={handleChange} className="form-control" required />
              </div>
            </div>
            <div className="row">
              <div class="col">
                <label>Descrição:</label>
                <textarea class="form-control" rows="2" name="descricao" value={formData.descricao} onChange={handleChange} className="form-control" required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Cadastrar</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Lista de Produtos</h2>
          {/* Aqui você pode colocar sua lista de produtos */}
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;
