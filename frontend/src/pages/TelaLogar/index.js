import { React, Component } from 'react';
import {LoginUrl} from '../../components/ConsumoAPI';

class TelaLogar extends Component {
    #email;
    #senha;
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = event => {
        this.setState({
            email: event.target.value, senha: event.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const informacoes = {
            email: this.#email,
            senha: this.#senha
        };

        const url = `http://192.168.0.103:3200/users/login`;

        LoginUrl(url, informacoes);
    };

    _handleEmail(e) {
        this.#email = e.target.value;
    }

    _handleSenha(e) {
        this.#senha = e.target.value;
    }
    render() {
        return (
            <>
                <div>
                    <div className="d-flex justify-content-center mt-5">
                        <section className="col-3">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="email@domain.com.br"
                                        onChange={this._handleEmail.bind(this)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" placeholder="*********"
                                        onChange={this._handleSenha.bind(this)} required />
                                </div>
                                <button type="submit" className="btn btn-primary" onChange={this.handleChange}>Acessar</button>
                            </form>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

export default TelaLogar;