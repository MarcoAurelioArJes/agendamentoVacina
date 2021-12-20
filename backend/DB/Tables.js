
class Tables {
    init(conexao) {
        this.conexao = conexao;

        this.tCadastro();
    };

    tCadastro() {
        const query = `
                        CREATE TABLE IF NOT EXISTS CADASTRO (
                            NOME VARCHAR(100) NOT NULL,
                            CPF VARCHAR(14),
                            IDADE INT NOT NULL,
                            SEXO INT NOT NULL,
                            SENHA VARCHAR(10),
                            PRIMARY KEY (CPF)
                        );`;
        
        this.conexao.query(query, error => {
            if (error) {
                console.log(error);
            } else {
                console.log('Tabela de cadastro criada com sucesso');
            }
        });
    }
};

module.exports = new Tables();