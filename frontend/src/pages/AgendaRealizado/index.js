import React, { Component } from 'react';

class AgendamentoRealizado extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <section className="d-flex border border-3 rounded-3 col-4 align-items-center p-5 m-auto mt-5">
                    <ul className="list-unstyled ">
                        {Array.of('Local Da Vacina', 'Horário Marcado', 'Data Marcada').map((titulo, index) => {
                            return (
                                <li key={index}>
                                    <h5>{titulo}</h5>
                                    <p>INFO</p>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default AgendamentoRealizado;