const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "06428714507",
    email: "daniel@gmail.com",
    fones: ["1111111111111", "1111111111111"],
    dependetes: [
        {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
    {
        nome: "Daniel",
        parentesco: "Filho",
        dataNasc: "25/12/2000"
    }],

    saldo: 100,
    depositar:function(valor)
        {
            this.saldo += valor
        }

}

const propsCliente = Object.keys(cliente);
console.log(propsCliente)