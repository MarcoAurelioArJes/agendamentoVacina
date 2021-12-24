const moment = require('moment');

const connection = require('../DB/connection');

class Agendamento {
    
    criaAgendamento(agendamento, res) {

        moment(agendamento.data, 'DD/MM/YYYY').format('YYYY/MM/DD HH:mm:ss');

        const query = `INSERT INTO AGENDAMENTO SET ?`;

        connection.query(query, agendamento, error => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(agendamento);
            }
        });
    };
};

module.exports = new Agendamento();