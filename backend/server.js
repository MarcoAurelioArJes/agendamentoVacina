const expressCustom = require('./config/expressCustom');
const connection = require('./DB/connection');
const Tables = require('./DB/Tables');

connection.connect(error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Conexão estabelecida com sucesso!!!');

        Tables.init(connection);

        const app = expressCustom();
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Servidor inicializado na porta ${PORT}`);
        });
    }
});
