const Agendamento = require('../models/agendamento');

module.exports = app => {

    app.post('/agendamento', (req, res) => {
        const agendamento = req.body;

        Agendamento.criaAgendamento(agendamento, res);
    });
};  