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

    login(email, senha, res) {
        const query = `SELECT EMAIL, SENHA FROM CADASTRO
                       WHERE CADASTRO.EMAIL = '${email}' AND CADASTRO.SENHA = '${senha}'`;
        
        const login = {email, senha}

        connection.query(query, login, (error, resultados) => {
            if (error) {
                res.status(400).json(error);
                console.log('error');
            } else {
                if (resultados.length > 0) {
                    res.status(200)
                } else {
                    res.json({
                        msg: 'Conta não existe'
                    });
                }
                console.log(resultados);
            }
        });
    };
};

module.exports = new Cadastramento();