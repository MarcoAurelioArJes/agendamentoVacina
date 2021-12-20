import {React, Component} from 'react';

class TelaLogar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div>
                    <div className="d-flex justify-content-center mt-5">
                        <section className="col-3">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="email@domain.com.br" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" placeholder="*********"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Acessar</button>
                            </form>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

export default TelaLogar;