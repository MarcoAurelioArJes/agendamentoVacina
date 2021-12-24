const Cadastramento = require('../models/cadastramento');

module.exports = app => {
    app.post('/cadastro', (req, res) => {
        const cadastro = req.body;

        Cadastramento.criaCadastro(cadastro, res);
    });

    app.post('/login', (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;
        Cadastramento.login(email, senha, res);
    });
};