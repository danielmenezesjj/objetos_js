const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1111111111111",
    email: "daniel@gmail.com",
    fones: ["1111111111111", "222222222222222"]
}
cliente.dependetes = {
    nome: "Sara",
    parantesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependetes.nome = "Sara silva";
console.log(cliente.fones[0]);