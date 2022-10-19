const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1111111111111",
    email: "daniel@gmail.com",
    fones: ["1111111111111", "22222222222222"],
    dependetes: [
        {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }
]
}

cliente.dependetes.push({
    nome: "Samia",
    parentesco: "Filha",
    dataNasc: "25/12/2000"
});

// console.log(cliente)

const filhaMaisNova = cliente.dependetes.filter(dependente => dependente.dataNasc==="25/12/2000")

console.log(filhaMaisNova[0].nome)