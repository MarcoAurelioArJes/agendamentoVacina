import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Agendamento extends Component {
    
    #local;
    #data;
    #hora;
    
    constructor(props) {
        super(props);
        this.state = {}
        
        this.#local = "";
        this.#data = "";
        this.#hora = "";
    }

    handleChange = event => {
        this.setState({
            local: event.target.value, data: event.target.value, hora: event.target.value
        });
    }

    handleSubmit = () => {

        const informacoes = {
            local: this.#local,
            data: this.#data,
            hora: this.#hora,
        };

        axios.post(`http://192.168.0.102:3200/agendamento`, informacoes,
            { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        console.log(informacoes);
    };

    _local(e) {
        this.#local = e.target.value;
        console.log(this.#local);
    }

    _data(e) {
        this.#data = e.target.value;
        console.log(this.#data);
    }

    _hora(e) {
        this.#hora = e.target.value;
        console.log(this.#hora);
    }

    render() {
        return (
            <>
                <section className="d-flex position-relative">
                    <form className="col-4 m-auto" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control my-5" placeholder="Informe o local" onChange={this._local.bind(this)} />
                        <input type="date" className="form-control my-5" placeholder="Informa a data" onChange={this._data.bind(this)} />
                        <input type="text" className="form-control my-5" placeholder="Informe a hora" onChange={this._hora.bind(this)} />

                        <button className="btn btn-primary btn-lg" onChange={this.handleChange}>Agendar</button>
                    </form>

                    <div className="dropdown position-absolute mt-5 ms-4">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Agendamentos
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/agendamentoRealizado" className="dropdown-item">Agendamentos Feitos</Link></li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Agendamento;