const cliente = [{
    nome: "Marco",
    cpf: "12324353454",
    telefones: [12321312321, 12323213213],
    agencia: 23124,
    conta: 2321321,
    saldo: 100,
    depositar: function (valorDepositado) {
        this.saldo += valorDepositado
    },
    dependentes: [
        {
            nome: "João",
            idade: 13,
            cpf: "213123213"
        },
        {
            nome: "Benez",
            idade: 15,
            cpf: "321512331"
        },
        {
            nome: "Antonio",
            idade: 17,
            cpf: "982718321"
        }
    ]
}];

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "function" ||
        typeof cliente[info] === "object"
    ) {
        continue
    } else {
        relatorio += `
            ${cliente[info]}
        `;
    }
};

console.log(relatorio);