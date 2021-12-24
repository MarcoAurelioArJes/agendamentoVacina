
class Tables {
    init(connection) {
        this.connection = connection;

        this.tCadastro();
        this.tAgendamento();
    };

    tCadastro() {
        const query = `
                        CREATE TABLE IF NOT EXISTS CADASTRO (
                            NOME VARCHAR(100) NOT NULL,
                            CPF VARCHAR(14),
                            IDADE INT NOT NULL,
                            SEXO INT NOT NULL,
                            EMAIL VARCHAR(50) NOT NULL,
                            SENHA VARCHAR(10) NOT NULL,
                            PRIMARY KEY (CPF)
                        );`;
        
        this.connection.query(query, error => {
            if (error) {
                console.log(error);
            } else {
                console.log('Tabela de cadastro criada com sucesso');
            }
        });
    }

    tAgendamento() {
        const sql = `CREATE TABLE IF NOT EXISTS AGENDAMENTO (
                            LOCAL VARCHAR(300) NOT NULL,
                            DATA DATETIME NOT NULL,
                            HORA TIME NOT NULL,
                            DATAATUAL DATETIME,
                            PRIMARY KEY (LOCAL, DATA, HORA)
                    );`;
        
        this.connection.query(sql, error => {
            if (error) {
                console.log(error);
            } else {
                console.log("Tabela agendamento criada com sucesso");
            }
        });
    }
};

module.exports = new Tables();