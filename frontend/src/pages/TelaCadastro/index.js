import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class TelaCadastro extends Component {
    #nome;
    #cpf;
    #idade;
    #sexoId;

    constructor(props) {
        super(props);
        this.#nome = "";
        this.#cpf = "";
        this.#idade = "";
        this.#sexoId = "";
    }

    _handleNome(e) {
        this.#nome = e.target.value;
        console.log(this.#nome);
    }

    _handleCpf(e) {
        this.#cpf = e.target.value;
        console.log(this.#cpf);
    }

    _handleIdade(e) {
        this.#idade = e.target.value;
        console.log(this.#idade);
    }

    _handleSexo(e) {
        this.#sexoId = e.target.value;
        console.log(this.#sexoId);
    }

    render() {
        return (
            <>
                <div>
                    <div className="d-flex justify-content-center mt-5">
                        <section className="col-3">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Nome</label>
                                    <input type="text" className="form-control" placeholder="João" onChange={this._handleNome.bind(this)} required />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">CPF</label>
                                    <input type="text" className="form-control" placeholder="000.000.000-00" onChange={this._handleCpf.bind(this)} required />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Idade</label>
                                    <input type="number" className="form-control" aria-describedby="emailHelp" required onChange={this._handleIdade.bind(this)} />

                                </div>
                                <div className="col-3 mb-3">
                                    <label>Sexo</label>
                                    <select onChange={this._handleSexo.bind(this)} >
                                        <option value="1">Masculino</option>
                                        <option value="2">Feminino</option>
                                        <option value="3">Outros</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" required />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                                    <Link to="/paginaLogin" className="btn btn-primary">Possui Conta</Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}