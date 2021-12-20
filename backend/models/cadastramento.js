const connection = require('../DB/connection');

class Cadastramento {

    criaCadastro(cadastro, res) {
        const insereCadastro = `INSERT INTO CADASTRO SET ?`;

        connection.query(insereCadastro, cadastro, (error, results) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    };
};

module.exports = new Cadastramento();