const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1111111111111",
    email: "daniel@gmail.com",
    fones: ["1111111111111", "2222222222222222"],
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


console.log(cliente.saldo);
cliente.depositar(400);
console.log(cliente.saldo);