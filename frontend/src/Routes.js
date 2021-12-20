import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AgendamentoRealizado from './pages/AgendaRealizado';
import Agendamento from './pages/TelaAgendamento';
import TelaCadastro from './pages/TelaCadastro';
import TelaLogar from './pages/TelaLogar';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacoes: [
                {
                    nome: "",
                    cpf: "",
                    idade: "",
                    sexo: ""
                }
            ],

            infoAgendamento: [{
                local: "",
                data: "",
                horario: ""
            }]

        }
    }  

    infoAgendamento(local, data, horario) {
        
    }
    
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <TelaCadastro />
                    </Route>

                    <Route path="/agendamento">
                        <Agendamento />
                    </Route>

                    <Route path="/agendamentoRealizado">
                        <AgendamentoRealizado />
                    </Route>

                    <Route path="/paginaLogin">
                        <TelaLogar />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Routes;