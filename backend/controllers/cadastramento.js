const Cadastramento = require('../models/cadastramento');

module.exports = app => {
    app.post('/cadastro', (req, res) => {
        const cadastro = req.body;

        Cadastramento.criaCadastro(cadastro, res);
    });
};