const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'br1ayqq82jljjppcdzd4-mysql.services.clever-cloud.com',
    user: 'uz4k2dccugqkhuk7',
    password: '6I0sDdkRF1rA65lCgkcs',
    database: 'br1ayqq82jljjppcdzd4'
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados MySQL:');
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Criar um cliente
app.post('/cliente', (req, res) => {
    const cliente = req.body;
    db.query('INSERT INTO Cliente SET ?', cliente, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao criar cliente');
            return;
        }
        console.log('Cliente criado com ID:', result.insertId);
        res.status(201).send('Cliente criado com sucesso');
    });
});

// Obter todos os clientes
app.get('/cliente', (req, res) => {
    db.query('SELECT * FROM Cliente', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao buscar clientes');
            return;
        }
        res.status(200).json(result);
    });
});

// Obter um cliente por ID
app.get('/cliente/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM Cliente WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao buscar cliente');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Cliente não encontrado');
            return;
        }
        res.status(200).json(result[0]);
    });
});

// Atualizar um cliente
app.put('/cliente/:id', (req, res) => {
    const id = req.params.id;
    const cliente = req.body;
    db.query('UPDATE Cliente SET ? WHERE id = ?', [cliente, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao atualizar cliente');
            return;
        }
        res.status(200).send('Cliente atualizado com sucesso');
    });
});

// Deletar um cliente
app.delete('/cliente/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Cliente WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao deletar cliente');
            return;
        }
        res.status(200).send('Cliente deletado com sucesso');
    });
});

// Criar um produto
app.post('/produto', (req, res) => {
    const produto = req.body;
    db.query('INSERT INTO Produto SET ?', produto, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao criar produto');
            return;
        }
        console.log('Produto criado com ID:', result.insertId);
        res.status(201).send('Produto criado com sucesso');
    });
});

// Obter todos os produtos
app.get('/produto', (req, res) => {
    db.query('SELECT * FROM Produto', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao buscar produtos');
            return;
        }
        res.status(200).json(result);
    });
});

// Obter um produto por ID
app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM Produto WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao buscar produto');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Produto não encontrado');
            return;
        }
        res.status(200).json(result[0]);
    });
});

// Atualizar um produto
app.put('/produto/:id', (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    db.query('UPDATE Produto SET ? WHERE id = ?', [produto, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao atualizar produto');
            return;
        }
        res.status(200).send('Produto atualizado com sucesso');
    });
});

// Deletar um produto
app.delete('/produto/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Produto WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao deletar produto');
            return;
        }
        res.status(200).send('Produto deletado com sucesso');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
