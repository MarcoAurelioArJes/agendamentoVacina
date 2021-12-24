import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class TelaCadastro extends Component {
    #nome;
    #cpf;
    #idade;
    #sexoId;
    #email;
    #senha;
    
    constructor(props) {
        super(props);
        this.#nome = "";
        this.#cpf = "";
        this.#idade = "";
        this.#sexoId = 0;
        this.#email = "";
        this.#senha = "";
    }

    handleChange = event => {
        this.setState({
            nome: event.target.value, cpf: event.target.value, idade: event.target.value,
            sexo: event.target.value, senha: event.target.value
        });
    }

    handleSubmit = () => {

        const informacoes = {
            nome: this.#nome,
            cpf: this.#cpf,
            idade: this.#idade,
            sexo: this.#sexoId,
            email: this.#email,
            senha: this.#senha
        };

        axios.post(`http://192.168.0.102:3200/cadastro`, informacoes,
            { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        console.log(informacoes);
    };


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
                            <form onSubmit={this.handleSubmit} action='/login'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                                    <input type="text" className="form-control" placeholder="João" onChange={this._handleNome.bind(this)} required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">CPF</label>
                                    <input type="text" className="form-control" placeholder="000.000.000-00" onChange={this._handleCpf.bind(this)} required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Idade</label>
                                    <input type="number" className="form-control" aria-describedby="emailHelp" required onChange={this._handleIdade.bind(this)} />

                                </div>
                                <div className="col-3 mb-3">
                                    <label>Sexo</label>
                                    <select onChange={this._handleSexo.bind(this)} required>
                                        <option value="0">Masculino</option>
                                        <option value="1">Feminino</option>
                                        <option value="2">Outros</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="email@domain.com.br" onChange={this._handleEmail.bind(this)} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" onChange={this._handleSenha.bind(this)} required />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary" onChange={this.handleChange}>Cadastrar</button>
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