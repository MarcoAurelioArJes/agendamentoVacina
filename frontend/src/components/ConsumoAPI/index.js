import axios from 'axios';

export const LoginUrl = (url, dados) => {
    
    axios.post(url, dados)
    .then(res => {
        //res.request.responseURL;

        window.location.href = '/agendamento';
    })
};

export const CadAtendimento = (dados) => {
    axios.post('', dados)
    .then(res => console.log('cadastrocomsucesso'))
};