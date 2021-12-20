import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                    <form className="col-4 m-auto">
                        <input type="text" className="form-control my-5" placeholder="Informe o local" onChange={this._local.bind(this)} />
                        <input type="date" className="form-control my-5" placeholder="Informa a data" onChange={this._data.bind(this)} />
                        <input type="text" className="form-control my-5" placeholder="Informe a hora" onChange={this._hora.bind(this)} />

                        <button className="btn btn-primary btn-lg">Agendar</button>
                    </form>

                    <div class="dropdown position-absolute mt-5 ms-4">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Agendamentos
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/agendamentoRealizado" className="dropdown-item">Agendamentos Feitos</Link></li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Agendamento;