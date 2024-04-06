import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
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
  });

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3001/produto');
      if (response.ok) {
        const data = await response.json();
        setProdutos(data);
      } else {
        throw new Error('Erro ao buscar produtos');
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao buscar produtos',
        toast: true,
      });
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
      const response = await fetch('http://localhost:3001/produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchProdutos();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Produto cadastrado com sucesso',
          toast: true,
        });
        setFormData({
          codigo: '',
          descricao: '',
          categoria: '',
          marca: '',
          modelo: '',
          unidadeMedida: '',
          estoque: '',
          precoCusto: '',
          precoVenda: '',
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: errorData.message,
          toast: true,
        });
      }
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro interno do servidor',
        toast: true,
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
        <h2>Cadastro de Produto</h2>            
            <form onSubmit={handleSubmit}>
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
        <div className="col">
          <h2>Lista de Produtos</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Unidade de Medida</th>
                <th>Estoque</th>
                <th>Preço Custo</th>
                <th>Preço Venda</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.codigo}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.marca}</td>
                  <td>{produto.modelo}</td>
                  <td>{produto.unidadeMedida}</td>
                  <td>{produto.estoque}</td>
                  <td>{produto.precoCusto}</td>
                  <td>{produto.precoVenda}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;
