const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "111111111111",
    email: "daniel@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];


//exibindo do objeto a chave do indice 0
 console.log(cliente[chaves[0]]);


//percorrendo um objeto
chaves.forEach(info => console.log(cliente[info]));